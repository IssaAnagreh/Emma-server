require("dotenv").config();

const MongoClient = require("mongodb").MongoClient;

const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;

const client = new MongoClient(dbHost, { useUnifiedTopology: true });
client.connect(function (err) {
  console.log(`Connected successfully to ${dbName} Database`);
});

module.exports = client;
