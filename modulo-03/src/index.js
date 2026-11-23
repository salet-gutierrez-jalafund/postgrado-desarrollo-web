import 'dotenv/config';
import dns from 'node:dns';

dns.setServers(["8.8.8.8", "8.8.4.4"]);

import app from './app.js';
import { connectMongo } from './infrastructure/database/mongo/connection.js';

const startServer = async () => {
    try {
        await connectMongo();

        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log(`Servidor iniciado en puerto ${PORT}`);
        });

    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

startServer();