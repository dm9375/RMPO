var mongo = require('mongodb').MongoClient;
var url = "mongodb+srv://sufferndan:1Danielek@cluster0-bk6vw.mongodb.net/test?retryWrites=true&w=majority";

function add() {
    mongo.connect(url, function(err, db) {
        if (err) {
            throw err;
        } else {
            var dbo = db.db("RMPO");
            var professor = {
                name: "Martinez",
                rating: "2.7",
                university: "RIT",
                course: "Yeet"
            };
            dbo.collection("RMPO").insertone(professor, function(err, res) {
                if (err) throw err;
                console.log("inserted professor");
                db.close;
            });
        }
    });
}

add();

/*Insert a bunch of objects at once */

/* MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [
      { name: 'John', address: 'Highway 71'},
      { name: 'Peter', address: 'Lowstreet 4'},
      { name: 'Amy', address: 'Apple st 652'},
      { name: 'Hannah', address: 'Mountain 21'},
      { name: 'Michael', address: 'Valley 345'},
      { name: 'Sandy', address: 'Ocean blvd 2'},
      { name: 'Betty', address: 'Green Grass 1'},
      { name: 'Richard', address: 'Sky st 331'},
      { name: 'Susan', address: 'One way 98'},
      { name: 'Vicky', address: 'Yellow Garden 2'},
      { name: 'Ben', address: 'Park Lane 38'},
      { name: 'William', address: 'Central st 954'},
      { name: 'Chuck', address: 'Main Road 989'},
      { name: 'Viola', address: 'Sideway 1633'}
    ];
    dbo.collection("customers").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
      db.close();
    });
  }); */


/*Find some objects with atrribute filtration*/

/*  var MongoClient = require('mongodb').MongoClient;
 var url = "mongodb://localhost:27017/";
 
 MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   var dbo = db.db("mydb");
   dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
     if (err) throw err;
     console.log(result);
     db.close();
   });
 }); */

/* Query and find objects by an attribute */

/* var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
  
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { address: "Park Lane 38" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); */

/*Sort the objects give by an attribute */

/*  var MongoClient = require('mongodb').MongoClient;
 var url = "mongodb://localhost:27017/";
 
 MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   var dbo = db.db("mydb");
   var mysort = { name: 1 };
   dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
     if (err) throw err;
     console.log(result);
     db.close();
   });
 }); */

/*Update an object */

/*   var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: /^S/ };
  var newvalues = {$set: {name: "Minnie"} };
  dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });
}); */