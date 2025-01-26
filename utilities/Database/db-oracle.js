/**
 * <h1>Oracle Database Helper</h1>
 * Helper class to handle database connection and run query on Database then return the result
 * 
 * @version : 1.0
 */

// utils/databaseUtils.js
const oracledb = require('oracledb');

// Load properties file
const propertiesReader = require('properties-reader');
const properties = propertiesReader(__dirname + '../../../DataFiles/DBconfig.properties');
const getProperty = (key) => properties.get(key);

const db_username = getProperty('Oracle_user');
const db_password = getProperty('Oracle_password');
const db_connectString = getProperty('Oracle_connectString');


const dbConfig = {
    user: db_username,
    password: db_password,
    connectString: db_connectString, // Example: 'localhost:1521/xe'
};

async function executeQuery(query, params = []) {
    let connection;
    try {
        connection = await oracledb.getConnection(dbConfig);
        const result = await connection.execute(query, params, { outFormat: oracledb.OUT_FORMAT_OBJECT });
        return result.rows; // Returns rows as an array of objects
    } catch (err) {
        console.error('Error executing query:', err);
        throw err;
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error closing connection:', err);
            }
        }
    }
}

module.exports = { executeQuery };

