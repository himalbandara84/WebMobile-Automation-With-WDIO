export const capabilities: ICapabilities = {
  MyChromeBrowser: {
    port: 9515,
    path: "/",
    capabilities: {
      browserName: "chrome",
      "goog:chromeOptions": {
        //args: ["--headless", "--disable-gpu"],
      },
    },
  },
  MyIOSBrowser: {
    port: 4723,
    capabilities: {
      platformName: "iOS",
      "appium:udid": "auto",
      "appium:automationName": "XCUITest",
      "appium:platformVersion": "16.4",
      "appium:deviceName": "iPhone 14",
      "appium:app": "test/resources/app/DigitalInspectionTool.app",
      "appium:noReset": false,
      "appium:newCommandTimeout": 2000,
      "appium:resetOnSessionStartOnly": true,
    },
  },
};

export interface ICapabilities {
  MyChromeBrowser?: any;
  MyIOSBrowser?: any;
}
