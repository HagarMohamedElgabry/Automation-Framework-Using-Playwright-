/**
 * <h1>SQLite Dtabase Helper</h1>
 * Helper class to handle database connection and run query on Database then return the result
 * 
 * @version : 1.0
 */

const sqlite3 = require('sqlite3').verbose();

function connectToDatabase(dbPath) {
    return new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error('Error connecting to SQLite database:', err.message);
        } else {
            console.log('Connected to the SQLite database.');
        }
    });
}

function executeQuery(dbPath, query, params = []) {
    return new Promise((resolve, reject) => {
        const db = connectToDatabase(dbPath);
        db.all(query, params, (err, rows) => {
            if (err) {
                console.error('Error executing query:', err.message);
                reject(err);
            } else {
                resolve(rows);
            }
            db.close((err) => {
                if (err) {
                    console.error('Error closing SQLite database:', err.message);
                }
            });
        });
    });
}

module.exports = { executeQuery };
