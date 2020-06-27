const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const connectionUrl = 'mongodb://127.0.0.1:27017'
const dataBaseName = 'ideas_overflow'

mongoClient.connect(connectionUrl, {useNewUrlParser: true} ,(error, client) => {
    if (error) {
        return console.log('Unable to connect to Db');
    }

    const db = client.db(dataBaseName)

    db.collection('questions').insertOne({
        title: "MongoDb Setup",
        body: "How to Setup Mongo Db in Ubuntu",
        tags: 'db' 
    })
})