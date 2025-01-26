/**
 * <h1>MSSql Database Helper</h1>
 * Helper class to handle database connection and run query on Database then return the result
 * 
 * @version : 1.0
 */


const sql = require('mssql');
const log  = require("../Logger/logger.js");

// Load properties file
const propertiesReader = require('properties-reader');
const properties = propertiesReader(__dirname + '../../../DataFiles/DBconfig.properties');
const getProperty = (key) => properties.get(key);

const db_username = getProperty('MSsql_username');
const db_password = getProperty('MSsql_password');
const db_server = getProperty('MSsql_server');
const db_port = getProperty('MSsql_port');
const db_database = getProperty('MSsql_database');
const db_instance = getProperty('MSsql_instance');



const config = {
    user: db_username,
    password: db_password,
    server: db_server,
    port: db_port,
    database: db_database,
    instance: db_instance,
    requestTimeout: 120000,
    options: {
        encrypt: false, // For Azure
        trustServerCertificate: true, // If local server does not have a certificate
    },
};

// Execute Query on MSSQl Database in one step included open, execute & close
async function executeQuery(query) {
    try {
        const pool = await sql.connect(config);
        const result = await pool.request().query(query);
        await pool.close();
        await log().info("DB Query is executed successfully on DB");
        return result.recordset;
    } catch (err) {
        // console.error('SQL error', err);
        await log().error(`SQL error', ${err}`);
        throw err;
    }
}


// First Step - Open connection to MSSQl Database
async function openDBConnection() {
        const pool = await sql.connect(config);
        await log().info("DB Connection is oppened");
        return pool;

}

// Second Step - Execute Query on MSSQl Database
async function executeDBQuery(pool,query) {
    try {
        const result = await pool.request().query(query);
        await log().info("DB Query is executed successfully on DB");
        return result.recordset;
    } catch (err) {
        // console.error('SQL error', err);
        await log().error(`SQL error', ${err}`);
        throw err;
    }
}

// Third Step - Close connection to MSSQl Database
async function closeDBConnection(pool) {
    await pool.close();
    await log().info("DB Connection is closed");
}



module.exports = { executeQuery, openDBConnection, executeDBQuery, closeDBConnection };
