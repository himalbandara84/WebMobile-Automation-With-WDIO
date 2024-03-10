#[Digital Inspection Tool][web & mobile] E2E Automation Framework

# Introduction

This Automation Framework will cover both DIT mobile and DIT web applications test using the WebdriverIO framework.WebdriverIO is an all-in-one framework for your web app development. It enables you to run small and lightweight component tests as well as run e2e test scenarios in the browser or on a mobile device. This guarantees that you to do the testing in an environment used by your users.

# Getting Started

1. Installation process

Clone the project using Git Clone and run the following command (prerequisite: Install Node.js https://nodejs.org/en/)
<code>npm install</code>.

# Build and Test

## Build and Test Web

1. Creating Script under ./specs folder .
2. Creating PageObject under test/page-objectsweb-page-objects.
3. Add test data to the test/resources/test-data and create the variable in the test/specs/test-configuration.ts and use in the script
4. Go to the config file and under any suite or create new suite
5. Run in the command line
   <code>ENV=stg RTYPE=web npx wdio run test/wdio.conf.ts --suite e2e && wdio-junit-to-html -i ./test/resources/reports/ -o ./test/resources/reports/</code>

Env = Environment [stg,qa]
RTYPE = Resource type like web or mobile
suite = [suite name given by you]
wdio-junit-to-himtl = test result -i means input -o means html output

Simply you can include in th package json under the <code>npm test</code>

## Web Run in the Pipline

### Automatic trigger

Digital Inspection Tool][Web & Mobile] E2E - Staging pipline automtically trigger after Digital Inspection Tool][Web & Mobile] E2E - Staging run

### Manual trigger

Users can manually trigger the pipline buy going to the Digital Inspection Tool][Web & Mobile] E2E enter run

## Build and Test Web/Mobile

1. Creating Script under ./specs folder .
2. Creating Web PageObject under test/page-objectsweb-page-objects and Mobile Page object under test/page-objects/mobile-page-objects .
3. Add test data to the test/resources/test-data and create the variable in the test/specs/test-configuration.ts and use in the script
4. Go to the config file and under any suite or create new suite
5. Run in the command line
   <code>ENV=stg RTYPE=both npx wdio run test/wdio.conf.ts --suite e2e && wdio-junit-to-html -i ./test/resources/reports/ -o ./test/resources/reports/</code>

Env = Environment [stg,qa]
RTYPE = Resource type like web or mobile this case we give both
suite = [suite name given by you]
wdio-junit-to-himtl = test result -i means input -o means html output

Simply you can include in th package json under the <code>npm test</code>

## Web Run in the Pipline

### Automatic trigger

still, there is no automatic trigger for the mobile pipeline.

### Manual trigger

1. build an IPA file using the Xcode project to run on iPhone 13(15.0)
2. Clone the Automation Project
3. Go to the following folder test/resources/app
4. remove the app if there and paste the new IPA
5. Go to the test/resources/capabilites.ts
6. Change the "appium:app": path with a new path.
7. save and use <code>git add && git commit -m "new message"&& git push</code>
8. The pipeline will automatically trigger

# Resource

- [Webdriver.io](https://webdriver.io/)
- [Appium](https://appium.io/)
- [TypeScript](https://www.typescriptlang.org/)
