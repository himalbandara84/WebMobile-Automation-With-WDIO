import * as path from "path";
import * as fs from "fs";

export default class basewebpage {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */

  browser: WebdriverIO.Browser;

  constructor(browserl: WebdriverIO.Browser) {
    this.browser = browserl;
  }

  public async navigate() {
    this.browser.maximizeWindow();
    this.browser.url("/");
  }

  public async clickElm(Element: WebdriverIO.Element, timeout: number = 90000) {
    try {
      console.log("Executing /clickElm :" + Element.selector);
      await Element.waitForExist({ timeout });
      await Element.waitForClickable({ timeout });
      await Element.click();
      console.log("Executed /clickElm :" + Element.selector);
    } catch (error) {
      // Capture screenshot
      const screenshotPath = `./test/resources/screenshots/error-${Date.now()}.png`;
      browser.saveScreenshot(screenshotPath);
      console.log(`Error screenshot for /clickElm saved at: ${screenshotPath}`);

      // Fail the test
      throw new Error("Unable to  /clickElm   " + error);
    }
  }

  public async setValueElem(
    Element: WebdriverIO.Element,
    value: string,
    timeout: number = 15000
  ) {
    try {
      console.log("Executing setValueElem: " + Element.selector);
      await Element.waitForExist({ timeout });
      await Element.waitForDisplayed({ timeout });
      await Element.setValue(value);
      console.log("Executed setValueElem: " + Element.selector);
    } catch (error) {
      const screenshotPath = `./test/resources/screenshots/error-${Date.now()}.png`;
      browser.saveScreenshot(screenshotPath);
      console.log(
        `Error screenshot for setValueElem saved at: ${screenshotPath}`
      );

      // Fail the test
      throw new Error(
        "Unable to run /setValueElem with " + Element.selector + ": " + error
      );
    }
  }
  public async clearValueElem(
    Element: WebdriverIO.Element,
    timeout: number = 15000
  ) {
    try {
      console.log("Exeucting clearValueElem");
      await Element.waitForExist({ timeout });
      await Element.waitForDisplayed();
      await Element.clearValue();
      console.log("Exeucted clearValueElem");
    } catch (error) {
      console.log(
        "Unable to Exeucte /clearValueElem with " + Element + "" + error
      );
    }
  }

  public async uploadDocuments(
    filePath: string,
    Element: WebdriverIO.Element,
    timeout: number = 15000
  ) {
    try {
      console.log("filePath is :" + filePath);
      let filepath = path.join(filePath);
      let remoteFilepath = await this.browser.uploadFile(filepath);
      console.log("executing /uploadDocuments method");
      await Element.waitForExist({ timeout });
      await Element.setValue(remoteFilepath);
      this.browser.pause(2000);
      console.log("executed /uploadDocuments method");
    } catch (error) {
      console.log("Unable to execute /uploadDocuments method : " + error);
    }
  }

  public async validateElmIsDisplayed(
    Element: WebdriverIO.Element,
    timeout: number = 40000
  ) {
    let isVisible = false;
    try {
      isVisible = await Element.waitForDisplayed({ timeout });
    } catch (error) {
      // Handle any errors or timeouts
      isVisible = false;
      console.log(`Error for /validateElmIsDisplayed ${error}`);
    }
    console.log("Is " + Element.selector + " Displayed ? " + isVisible);
    return isVisible;
  }

  public async validateElmTextAsExpected(
    Element: WebdriverIO.Element,
    text: any,
    timeout: number = 15000
  ) {
    let elementValue: string;
    try {
      console.log("Executing /validateElmTextAsExpected");
      await Element.waitForExist({ timeout });
      await browser.waitUntil(
        async () => {
          elementValue = await Element.getText(); // Get the current text of the element
          console.log(
            "Actual Element text:",
            elementValue,
            " && Expected Element text:",
            text
          );
          return elementValue === text; // Compare element's text with the expected text
        },
        {
          timeout, // Maximum wait time in milliseconds
          timeoutMsg: `Element's text did not become '${text}' within ${timeout} milliseconds`, // Error message if the condition is not met within the timeout
          interval: 1000, // Polling interval in milliseconds
        }
      );
      console.log("Executed /validateElmTextAsExpected");
      await expect(text).toEqual(elementValue); // Perform the expectation after the element's text is updated
    } catch (error) {
      console.log(
        "Unable to Execute /validateElmTextAsExpected due to " + error
      );
      throw error; // Re-throw the error to mark the test as failed
    }
  }

  public async waitUntil(
    Element: WebdriverIO.Element,
    delayDuration: number = 3000
  ) {
    try {
      console.log("Executing /waitUntil");
      await browser.waitUntil(
        () => {
          return Element.isExisting() && Element.isDisplayed();
        },
        {
          timeout: 40000, // Maximum wait time in milliseconds (adjust as needed)
          timeoutMsg: "Element is not displayed and clickable within 5 seconds", // Error message if the condition is not met within the timeout
        }
      );
      await browser.pause(delayDuration);
      console.log("Executed /waitUntil");
    } catch (error) {
      console.log(
        "Unable to execute /waitUntil  with " + Element.selector + "" + error
      );
    }
  }
}
