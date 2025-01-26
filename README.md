**Overview**
This framework provides a structured approach to organizing test automation scripts, data files, utilities, and reports. The project follows a modular design to enhance maintainability and reusability.


**Features**
- Page Object Model (POM): Organizes web page interactions in a structured manner.

- Data-Driven Testing: Supports CSV, JSON, and Excel data sources.

- Database Integration: Includes utilities for connecting to MS SQL databases.

- Logging & Reporting: Integrated logging and Allure reporting for enhanced test insights.

- Reusable Utility Functions: Provides common helpers for web automation actions.

- Modular Test Scripts: Separates sample tests from actual project tests for clarity.

- - **Setup Instructions**
Clone the repository: git clone <repository-url>cd Framework

Install dependencies: npm install

Run sample tests: npm test

**Reporting**
Allure Reporting:

Run tests and generate Allure reports:

npm run allure

View the generated report:

allure serve allure-results
