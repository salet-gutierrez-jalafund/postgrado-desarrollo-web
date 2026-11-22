// IMPORTANTE: Forzar DNS públicos ANTES de cualquier otra importación para evitar el error querySrv ECONNREFUSED
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import app from './app.js';
import { connectMongo } from './infrastructure/database/mongo/connection.js';
import { connectMysql } from './infrastructure/database/mysql/connection.js';
import CurrencyMongoRepository from './infrastructure/database/mongo/currency.mongo.repository.js';
import CategoryMySQLRepository from './infrastructure/database/mysql/category.mysql.repository.js';

// Iniciar conexiones
try {
    await connectMongo();
    await connectMysql();

    // Ejecución de datos semilla para monedas (MongoDB) y categorías (MySQL)
    const currencyRepo = new CurrencyMongoRepository();
    const categoryRepo = new CategoryMySQLRepository();
    await currencyRepo.seedCurrencies();
    await categoryRepo.seedCategories();

    const PORT = process.env.PORT || 3000;
    
    // Levantar el servidor
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    });

} catch (error) {
    console.error("Error al iniciar la aplicación:", error);
    process.exit(1);
}