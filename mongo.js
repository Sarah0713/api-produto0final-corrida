const { MongoClient, ObjectId } = require("mongodb");
require('dotenv').config('./.env');

const client = new MongoClient(process.env.MONGO_URI);

exports.connectDB = async () => {
    try {
        await client.connect();
        console.log("Conectado ao MongoDB");
    }catch (err) {
        console.error("Erro ao conectar:", err);
    }
}