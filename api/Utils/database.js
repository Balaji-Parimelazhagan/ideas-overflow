const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const connectionUrl = 'mongodb://127.0.0.1:27017/ideas_overflow';

let _db;

const mongoConnect = () => {
    mongoClient.connect(connectionUrl).then(client => {
        _db = client.db();
    }).catch( err => {
        console.log(err);
    });
}

// Returns the connect DB.
const getDb = () => {
    if (_db) {
        return _db;
    }
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;