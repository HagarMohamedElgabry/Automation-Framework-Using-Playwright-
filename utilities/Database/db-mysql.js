/**
 * <h1>MySql Database Helper</h1>
 * Helper class to handle database connection and run query on Database then return the result
 * 
 * @version : 1.0
 */


const mysql = require('mysql2/promise');

// Load properties file
const propertiesReader = require('properties-reader');
const properties = propertiesReader(__dirname + '../../../DataFiles/DBconfig.properties');
const getProperty = (key) => properties.get(key);

const db_username = getProperty('mysql_user');
const db_password = getProperty('mysql_password');
const db_database = getProperty('mysql_database');
const db_host = getProperty('mysql_host');


const config = {
    host: db_host, // e.g., 'localhost' or a remote IP
    user: db_username,
    password: db_password,
    database: db_database,
};

async function executeQuery(query, params = []) {
    let connection;
    try {
        connection = await mysql.createConnection(config);
        const [rows] = await connection.execute(query, params);
        return rows;
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

module.exports = { executeQuery };
