/**
 * <h1>Postgree Database Helper</h1>
 * Helper class to handle database connection and run query on Database then return the result
 * 
 * @version : 1.0
 */


const { Pool } = require('pg');

// Load properties file
const propertiesReader = require('properties-reader');
const properties = propertiesReader(__dirname + '../../../DataFiles/DBconfig.properties');
const getProperty = (key) => properties.get(key);

const db_username = getProperty('pg_user');
const db_password = getProperty('pg_password');
const db_database = getProperty('pg_database');
const db_host = getProperty('pg_host');
const db_port = getProperty('pg_port');


const pool = new Pool({
    user: db_username,
    host: db_host, // e.g., 'localhost' or a remote server
    database: db_database,
    password: db_password,
    port: db_port,
});

async function executeQuery(query, params = []) {
    let client;
    try {
        client = await pool.connect();
        const result = await client.query(query, params);
        return result.rows; // Returns the rows from the query
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    } finally {
        if (client) {
            client.release(); // Release the client back to the pool
        }
    }
}

module.exports = { executeQuery };
