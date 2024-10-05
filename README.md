
# E2E Automation Framework

## Introduction

This Automation Framework is designed for testing both web and mobile applications using the WebdriverIO framework. WebdriverIO is an all-in-one solution for web app development testing. It enables you to run lightweight component tests as well as full end-to-end test scenarios in browsers or on mobile devices, ensuring that testing occurs in the same environment as your users.

## Getting Started

1. **Installation Process**
   
   Clone the repository using Git and run the following command (prerequisite: Install Node.js from [Node.js](https://nodejs.org/en/)):
   ```
   npm install
   ```

## Build and Test

### Build and Test Web

1. Create test scripts under the `./specs` folder.
2. Create PageObjects under `test/page-objects/web-page-objects`.
3. Add test data to `test/resources/test-data` and create variables in `test/specs/test-configuration.ts` to use in the script.
4. Go to the configuration file and edit or create a new test suite.
5. Run the following command in the terminal:
   ```
   ENV=stg RTYPE=web npx wdio run test/wdio.conf.ts --suite e2e && wdio-junit-to-html -i ./test/resources/reports/ -o ./test/resources/reports/
   ```

   - `ENV` = Environment (e.g., `stg`, `qa`)
   - `RTYPE` = Resource type (e.g., `web`, `mobile`)
   - `suite` = The name of the test suite.
   - `wdio-junit-to-html` = Converts test results into HTML (`-i` is input, `-o` is HTML output)

You can also include this command in `package.json` under `npm test`.

### Web Run in the Pipeline

#### Automatic Trigger

The web end-to-end pipeline is automatically triggered after the successful run of related pipelines.

#### Manual Trigger

Users can manually trigger the pipeline by navigating to the pipeline's UI and starting the run.

### Build and Test Web/Mobile

1. Create test scripts under the `./specs` folder.
2. Create Web PageObjects under `test/page-objects/web-page-objects` and Mobile PageObjects under `test/page-objects/mobile-page-objects`.
3. Add test data to `test/resources/test-data` and create variables in `test/specs/test-configuration.ts` to use in the script.
4. Go to the configuration file and edit or create a new test suite.
5. Run the following command in the terminal:
   ```
   ENV=stg RTYPE=both npx wdio run test/wdio.conf.ts --suite e2e && wdio-junit-to-html -i ./test/resources/reports/ -o ./test/resources/reports/
   ```

   - `ENV` = Environment (e.g., `stg`, `qa`)
   - `RTYPE` = Resource type (e.g., `web`, `mobile`, or `both`)
   - `suite` = The name of the test suite.
   - `wdio-junit-to-html` = Converts test results into HTML (`-i` is input, `-o` is HTML output)

You can also include this command in `package.json` under `npm test`.

### Mobile Run in the Pipeline

#### Automatic Trigger

Currently, there is no automatic trigger for the mobile pipeline.

#### Manual Trigger

1. Build the IPA file using Xcode to run on the desired device (e.g., iPhone 13 with iOS 15.0).
2. Clone the automation repository.
3. Navigate to the `test/resources/app` folder.
4. Remove the old app file and replace it with the new IPA file.
5. Update the app path in `test/resources/capabilities.ts` (i.e., `"appium:app": "new/path/to/ipa"`).
6. Save the changes and push them using:
   ```
   git add && git commit -m "new message" && git push
   ```
7. The pipeline will automatically trigger.

## Resources

- [Webdriver.io](https://webdriver.io/)
- [Appium](https://appium.io/)
- [TypeScript](https://www.typescriptlang.org/)
```

You can copy this and place it in your `README.md` file for your project.
