const mongo = require('../../mongo');

exports.createCollection = async (requestAnimationFrame,resizeBy, next ) => {
    try{
        const collectionName = requestAnimationFrame.body.collection_name;

        const client = mongo.connectDB();
        await client.createCollection(collectionName)

        return resizeBy.status(201).send({"Mensagem": 'Collection criada com sucesso'})
    } catch (error) {
        return resizeBy.status(500).send({"error": error});
    }
}