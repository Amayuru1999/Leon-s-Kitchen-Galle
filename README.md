# React Unit Testing

This repository contains unit tests for a React application. The tests are organized in the `tests` folder, where you can find individual testing files.

## Getting Started

To run the unit tests, you will need to install the following dependencies:

- `selenium-webdriver`
- `cypress`
- `cypress-mochawesome-reporter`
- `mocha`
- `mochawesome`
- `mochawesome-report-generator`

You can install these dependencies by running:

```bash
npm install selenium-webdriver cypress cypress-mochawesome-reporter mocha mochawesome mochawesome-report-generator --save-dev
```

## Running Tests

After installing the dependencies, ensure that your `package.json` file has the following configuration for the `test` script:

```json
{
  "scripts": {
    "test": "mocha tests/components/ --reporter mochawesome --reporter-options reportDir=Report,reportFilename=Test_Report"
  }
}
```

This configuration specifies that Mocha will run the tests located in the `tests/components/` directory and generate a Mochawesome report in the `Report` directory with the filename `Test_Report`.

To run the tests, execute the following command:

```bash
npm test
```

This command will trigger Mocha to run the unit tests and generate the Mochawesome report.

