/**
 * <h1>Read Write Data</h1>
 * Read write Data is handle reading and writing data from or to Excel, CSV & JSON  in playwright
 * @version : 1.0
 */

import * as fs from 'fs';
import path from 'path';
import XLSX from 'xlsx';
import { parse } from 'csv-parse/sync';


const DataFolderPath = 'DataFiles' + path.sep; //path of the DataFiles Folder

/**
 * Function to read the data from Excel File.
 * 
 * @param {fileName} The Name of Excel File.
 * @param {sheetNo} The Index of the sheet in the excel File.
 */

export function readDataFromExcelFile(fileName, sheetNo) {
    const fullPath = DataFolderPath + fileName;
    if (!fs.existsSync(fullPath)) {
        throw new Error(`CANNOT FIND FILE ${fullPath}. PLEASE MAKE SURE IT EXISTS!`);
    }
    const workbook = XLSX.readFile(fullPath);
    const dataFromFirstSheet = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[sheetNo]]);
    return dataFromFirstSheet;
}

/**
 * Function to read the data from CSV File.
 * 
 * @param {fileName} The Name of CSV File.
 * 
 */

export function readDataFromCSVFile(fileName) {
    const fullPath = DataFolderPath + fileName;
    const records = parse(fs.readFileSync(fullPath), {
        columns: true,
        skip_empty_lines: true
    })
    return records;
}


/**
 * Function to read the data from JSON File.
 * 
 * @param {fileName} The Name of JSON File.
 * 
 */

export function readDataFromJSONFile(fileName) {
    const fullPath = DataFolderPath + fileName;
    const records = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
    return records;
}

/**
 * Function to write the data to JSON File.
 * 
 * @param {fileName} The Name of JSON File.
 * 
 */

export function writeDataToJSONFile(fileName, Key, Value) {
    const fullPath = DataFolderPath + fileName;
    //Read JSON Data
    const jsonData = JSON.parse(fs.readFileSync(fullPath, 'utf8'));

    // Update the JSON data
    jsonData[Key] = Value;  // Update a specific key

    //Write in JSON
    fs.writeFileSync(fullPath, JSON.stringify(jsonData, null, 2), 'utf8');
}