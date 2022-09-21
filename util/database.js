const { MongoClient } = require("mongodb");

let _db;
const connectMongo = (callback) => {
  MongoClient.connect(
    "mongodb+srv://nlss05:dimVt4UC3FqbblXk@cluster.fjborlm.mongodb.net/shop?retryWrites=true&w=majority")
    .then((client) => {
      _db = client.db() // fetch the database
      callback();
      console.log("Database is connected");
    })
    .catch((err) => {
      console.log(err);
      throw err
    });
};

const getDb = () => {
    if(_db){
        return _db;
    }
    throw 'No database is found...'
}

exports.connectMongo = connectMongo;
exports.getDb = getDb;
