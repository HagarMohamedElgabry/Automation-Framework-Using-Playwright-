const { test } = require('@playwright/test');
import { readDataFromCSVFile } from '../../utilities/DataDriven/ReadWriteData.js';

const CSVDataProvider = readDataFromCSVFile('SampleCSV.csv');
/**
 * <h1>Sample Data Driven using CSV</h1>
 * This is a sample clase to how to make a data Driven using CSV file
 * 
 * @version : 1.0
 */

for(const lineFromCSV of CSVDataProvider){

    test(`Read From CSV ${lineFromCSV.TC_Name}`, async ({ page }) => {
   console.log(lineFromCSV.TC_Name,lineFromCSV.Username,lineFromCSV.Password);
    
    });

}
