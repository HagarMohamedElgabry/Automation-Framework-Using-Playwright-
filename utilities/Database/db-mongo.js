/**
 * <h1>Mongo Database Helper</h1>
 * Helper class to handle database connection and run query on Database then return the result
 * 
 * @version : 1.0
 */


// utils/databaseUtils.js
const { MongoClient } = require('mongodb');


// Load properties file
const propertiesReader = require('properties-reader');
const properties = propertiesReader(__dirname + '../../../DataFiles/DBconfig.properties');
const getProperty = (key) => properties.get(key);

const db_uri = getProperty('Mongo_uri');
const db_dbname = getProperty('Mongo_dbName');


const dbConfig = {
    uri: db_uri, // Replace with your MongoDB URI
    dbName: db_dbname,    // Replace with your database name
};

let client;

async function connectToDatabase() {
    if (!client) {
        client = new MongoClient(dbConfig.uri);
        await client.connect();
    }
    return client.db(dbConfig.dbName);
}

async function executeQuery(collectionName, query = {}, options = {}) {
    try {
        const db = await connectToDatabase();
        const collection = db.collection(collectionName);
        const result = await collection.find(query, options).toArray();
        return result; // Returns the matching documents as an array
    } catch (err) {
        console.error('Error executing query:', err);
        throw err;
    }
}

async function closeConnection() {
    if (client) {
        await client.close();
        client = null;
    }
}

module.exports = { executeQuery, closeConnection };
