let mongo = require('mongodb')

let MongoClient = mongo.MongoClient;
let databaseName = 'HameedahAdebanjo'
let url = `mongodb://localhost:27017/${databaseName}`;
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log(`Database created by ${databaseName}`);
  db.close();
});