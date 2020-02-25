import { generateTable } from './RatingTable.js';
import { MongoClient } from 'mongodb';
import { equal } from 'assert';

// Connection URL
var url = 'mongodb+srv://sufferndan:1Danielek@ratempo-bk6vw.mongodb.net/test?retryWrites=true&w=majority';

// Use connect method to connect to the server
async function connect() {
    MongoClient.connect(url, function(err, client) {
        equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db('RMPO');
        insertDocuments(db, function() {
            client.close();
        });
    });
}


// Get from csv file that is inputed from the automatic usage of 
// selenium that queried the professors into that file from RMP
var insertDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('RMPO');
    let query = {
            name: 'Jacques',
            rating: 5.0,
            university: 'RIT',
            course: 'Personal Software'
        }
        // Insert some documents
    collection.insertOne(query, function(err, result) {
        equal(err, null);
        console.log("Inserted 1 documents into the collection");
        callback(result);
    });
}

export function retrieveProfessors() {
    console.log('works');
    var university = document.getElementById("uni_input").nodeValue;
    var course = document.getElementById("course_input").nodeValue;
    var query = { university: university, course: course };
    var arrayProfs = db.collection("RMPO").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
    generateTable(arrayProfs);
}

document.querySelector('#query_exec').addEventListener('click', retrieveProfessors);