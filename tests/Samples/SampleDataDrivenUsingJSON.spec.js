const { test } = require('@playwright/test');
import { readDataFromJSONFile } from '../../utilities/DataDriven/ReadWriteData.js';

const JSONDataProvider = readDataFromJSONFile('SampleJSON.json');
/**
 * <h1>Sample Data Driven using JSON</h1>
 * This is a sample clase to how to make a data Driven using JSON file
 * 
 * @version : 1.0
 */

for(const lineFromJSON of JSONDataProvider){

    test(`Read From JSON ${lineFromJSON.username}`, async ({ page }) => {
   console.log(lineFromJSON.username,lineFromJSON.password);
    
    });

}
