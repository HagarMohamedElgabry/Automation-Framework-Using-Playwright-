"use strict"; 
// Enforces strict mode to catch common programming errors and unsafe actions like accidental global variable creation.

const winston = require("winston");
// Import the winston library, which provides robust logging capabilities for Node.js applications.

const path = require("path");
// Import the path module to work with file and directory paths in a cross-platform way.

const fs = require("fs");
// Import the file system module to handle file and directory operations such as creation and verification.

// Define a custom offset in hours to adjust timestamps (e.g., for time zone corrections or machine clock issues).
const TIME_OFFSET_HOURS = 2;

// Function to generate an adjusted timestamp considering the time offset
const generateAdjustedTimestamp = () => {
  const now = new Date(); // Get the current date and time from the machine.
  now.setHours(now.getHours() + TIME_OFFSET_HOURS); 
  // Add the defined time offset (e.g., +2 hours) to the current time.
  return now.toISOString(); 
  // Return the adjusted timestamp in ISO 8601 format for consistency across platforms.
};

// Define the directory where log files will be stored
const logsDir = path.join(__dirname, "../../logs");
// Combine the current script directory path with the "logs" folder to create a full path for log storage.

if (!fs.existsSync(logsDir)) {
  // Check if the "logs" directory does not exist.
  fs.mkdirSync(logsDir);
  // Create the "logs" directory if it is missing, ensuring a location to store log files.
}

// Define a custom log format that includes the adjusted timestamp
const logFormat = winston.format.printf(({ level, message, timestamp }) => {
  const adjustedTime = generateAdjustedTimestamp(); 
  // Generate the corrected timestamp for consistent log output.
  return `[${level.toUpperCase()}] ${adjustedTime} ${message}`;
  // Format the log message to include log level, timestamp, and message.
});

// Function to create and configure a logger instance
const createLogger = () => {
  const timestamp = generateAdjustedTimestamp()
    .replace(/:/g, "-")
    .replace("T", "_")
    .slice(0, 20);

  // Generate a unique timestamp for log filenames by replacing characters and truncating to the desired length.

  return winston.createLogger({
    level: "info", 
    // Set the default logging level to "info". Lower-severity messages will be ignored.

    format: winston.format.combine(
      winston.format.timestamp({ format: generateAdjustedTimestamp }), 
      // Use the adjusted timestamp for log entries to ensure accurate times.
      logFormat
      // Apply the custom log format to format log messages.
    ),

    transports: [
      // Define the output methods (transports) for the logger.

      new winston.transports.Console({
        // Console transport to display logs in the terminal.
        level: "info", 
        // Log messages with "info" level and higher to the console.
      }),

   

      new winston.transports.File({
        // File transport for "info" level logs.
        // filename: path.join(logsDir, `info-${timestamp}.log`), 
        filename: path.join(logsDir, `info.log`), 
        // Generate a log file named `info-<timestamp>.log` in the "logs" directory.
        level: "info", 
        // Log messages with "info" level and higher.
        maxsize: 5242880, 
        // Limit log file size to 5MB. Older logs will be rotated.
        maxFiles: 5, 
        // Retain up to 5 rotated log files, deleting the oldest if the limit is exceeded.
      }),

      new winston.transports.File({
        // File transport for "error" level logs.
        // filename: path.join(logsDir, `error-${timestamp}.log`), 
        filename: path.join(logsDir, `error.log`), 
        // Generate a log file named `error-<timestamp>.log` in the "logs" directory.
        level: "error", 
        // Log messages with "error" level and higher.
        maxsize: 5242880, 
        // Limit log file size to 5MB for error logs.
        maxFiles: 5, 
        // Retain up to 5 rotated error log files.
      }),
    ],
  });
  // Return the configured logger instance for use in the application.
};

module.exports = createLogger;
// Export the `createLogger` function so it can be imported and used in other modules of the application.
