
const { test, expect } = require('@playwright/test');
const log = require("../../utilities/Logger/logger.js"); // Import the logger
const LoginPage = require('../../pages/login.page.js');
import * as allure from "allure-js-commons";
const DBHelper = require('../../utilities/Database/db-mssql.js');


test('Connect to Mssql Database', async ({ page }) => {

    /*********** For Mssql ****************/
    const Query = 'SELECT TOP (1) code FROM [Tamwili].[dbo].[OTPs], [Tamwili].[dbo].[LeasingApplications]';
     
    // Connect to Database by one step
    const DBResult = await DBHelper.executeQuery(Query);
    console.log(DBResult);

    // Connect to Database by three steps
    const pool = await DBHelper.openDBConnection();
    const DBResult1 = await DBHelper.executeDBQuery(pool,Query);
    await DBHelper.closeDBConnection(pool);
    await console.log(DBResult1);


    /*********** For Mysql ****************/
    // const Query = 'SELECT users FROM users';
    // const params = ['value']; // Use parameterized queries to prevent SQL injection
    // const DBResult = await DBHelper.verifyDatabaseEntry(query, params);
    // console.log(DBResult);


    /*********** For postgree ****************/
    // const Query = 'SELECT users FROM users';
    // const params = ['value']; // Use parameterized queries to prevent SQL injection
    // const DBResult = await DBHelper.verifyDatabaseEntry(Query, params);
    // console.log(DBResult);


    /*********** For Oracle ****************/
    // const Query = 'SELECT users FROM users';
    // const params = ['expected_value']; // Use bind parameters for secure queries
    // const DBResult = await DBHelper.verifyDatabaseEntry(Query, params);
    // console.log(DBResult);


    /*********** For SQLite ****************/
    // const Query = 'SELECT users FROM users';
    // const dbPath = './path/to/your/database.db';
    // const params = ['value']; // Use parameterized queries
    // const DBResult = await DBHelper.verifyDatabaseEntry(dbPath, query, params);
    // console.log(DBResult);

    /*********** For Mongo ****************/
    // const collectionName = 'your_collection_name';
    // const Query = { column_name: 'expected_value' }; // Replace with your query
    // const DBResult = await examplePage.verifyDatabaseEntry(collectionName, Query);
    // console.log(DBResult);

});
