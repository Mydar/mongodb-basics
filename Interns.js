let mongo = require('mongodb')

let MongoClient = mongo.MongoClient;
let url = 'mongodb://localhost:27017/';
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var thedb = db.db('HameedahAdebanjo');
  thedb.createCollection('interns', function(err, res) {
    if (err) throw err;
    console.log('Interns collection created');
    db.close();
  });
});