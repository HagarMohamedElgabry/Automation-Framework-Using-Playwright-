const { test } = require('@playwright/test');
import { readDataFromExcelFile } from '../../utilities/DataDriven/ReadWriteData.js';

const ExcelDataProvider = readDataFromExcelFile('SampleExcel.xlsx',0);

/**
 * <h1>Sample Data Driven using Excel</h1>
 * This is a sample clase to how to make a data Driven using Excel file
 * 
 * @version : 1.0
 */

for (const lineFromExcel of ExcelDataProvider) {
  test(`read test data from excel - ${lineFromExcel.TC_Name} - ${lineFromExcel.Username} - ${lineFromExcel.Password}`, async ({ page }) => {
    
    console.log(lineFromExcel.TC_Name,lineFromExcel.Username,lineFromExcel.Password);
  });
}
