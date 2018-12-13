const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const testUsers = require('./users-test-collection')
console.log(testUsers)
// Connection URL
const url = 'mongodb://localhost:27017'

// Database Name
const dbName = 'bedu-7'

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
  if (err) console.log(err)
  console.log('Connected successfully to server')
  const db = client.db(dbName)
  db.collection('users')
    .find({})
    .toArray(function (err, docs) {
      if (err) console.log(err)
      console.log(docs.map(d => d.name))
    })
  client.close()
})
