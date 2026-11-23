
import mongoose from "mongoose";

export const connectMongo = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;

        if (!mongoUri) {
            throw new Error(
                "No se encontró MONGO_URI. Verifica tu archivo .env"
            );
        }

        await mongoose.connect(mongoUri, {
            serverSelectionTimeoutMS: 10000
        });

        console.log("=================================");
        console.log(" MongoDB conectado correctamente");
        console.log(" Base de datos:", mongoose.connection.name);
        console.log("=================================");

    } catch (error) {
        console.error("Error al conectar con MongoDB:");
        console.error(error.message);

        throw error;
    }
};
