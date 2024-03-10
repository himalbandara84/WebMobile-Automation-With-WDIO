/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */

export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  browser: WebdriverIO.Browser;

  constructor(browserl: WebdriverIO.Browser) {
    this.browser = browserl;
  }
  private get btnDone() {
    return this.browser.$('//XCUIElementTypeOther[@name="Done"]');
  }

  public get btnOk() {
    return this.browser.$('//XCUIElementTypeButton[@name="OK"]');
  }

  private get btnDoneinKeybaord() {
    return this.browser.$(
      '//XCUIElementTypeToolbar[@name="Toolbar"]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[3]'
    );
  }

  public async clickDoneinKeybaord() {
    this.clickElm(await this.btnDoneinKeybaord);
  }
  public async clickDoneBtn() {
    this.clickElm(await this.btnDone);
  }
  public async clickDonebtn() {
    try {
      console.log("Executing ./clickDonebtn");
      await this.clickDoneBtn();
      console.log("Executed ./clickDonebtn");
    } catch (error) {}
  }

  public async clickOktn() {
    this.browser.pause(50000);
    //  this.clickElm(await this.btnOk);
    await this.browser.touchAction({
      action: "tap",
      x: 342,
      y: 509,
    });
  }

  // public async clickElm(Element: WebdriverIO.Element) {
  //   try {
  //     console.log("Executing /clickElm");
  //     await browser.waitUntil(
  //       () => {
  //         return Element.isDisplayed();
  //       },
  //       {
  //         timeout: 40000, // Maximum wait time in milliseconds (adjust as needed)
  //         timeoutMsg: "Element is not displayed and clickable within 5 seconds", // Error message if the condition is not met within the timeout
  //       }
  //     );
  //     await Element.click();
  //     console.log("Executed /clickElm");
  //   } catch (error) {
  //     console.log("Unable to upload /clickElm" + error);
  //   }
  // }

  public async clickElm(
    Element: WebdriverIO.Element,
    timeout: number = 800000
  ) {
    try {
      console.log("Executing /clickElm :" + Element.selector);
      await Element.waitForExist({ timeout });
      await Element.waitForDisplayed({ timeout });
      await Element.click();
      console.log("Executed /clickElm :" + Element.selector);
    } catch (error) {
      const screenshotPath = `./test/resources/screenshots/error-${Date.now()}.png`;
      browser.saveScreenshot(screenshotPath);
      console.log(`Error screenshot for /clickElm saved at: ${screenshotPath}`);
      throw new Error("Unable to  /clickElm   " + error);
    }
  }

  public async setValueElem(
    Element: WebdriverIO.Element,
    value: string,
    timeout: number = 800000
  ) {
    try {
      console.log("Exeucting setValueElem" + Element.selector);
      await Element.waitForExist({ timeout });
      await Element.waitForDisplayed({ timeout });
      await Element.setValue(value);
      console.log("Exeucted setValueElem" + Element.selector);
    } catch (error) {
      const screenshotPath = `./test/resources/screenshots/setValueElem-${Date.now()}.png`;
      browser.saveScreenshot(screenshotPath);
      console.log(
        `Error screenshot for /setValueElem saved at: ${screenshotPath}`
      );
      throw new Error("Unable to  /setValueElem   " + error);
    }
  }

  public async getElemText(
    Element: WebdriverIO.Element,
    timeout: number = 800000
  ) {
    try {
      console.log("Exeucting getElemText" + Element.selector);
      await Element.waitForExist({ timeout });
      await Element.waitForDisplayed({ timeout });
      let value = (await Element.getText()).toString();
      console.log(Element.selector + " get value get as : " + value);
      return value;
    } catch (error) {
      const screenshotPath = `./test/resources/screenshots/getElemText-${Date.now()}.png`;
      browser.saveScreenshot(screenshotPath);
      console.log(
        `Error screenshot for /getElemText saved at: ${screenshotPath}`
      );
      throw new Error("Unable to  /getElemText   " + error);
    }
  }

  public async validateElmIsDisplayed(
    Element: WebdriverIO.Element,
    timeout: number = 50000
  ) {
    let isVisible = false;
    try {
      // Wait for the element to be displayed with a specified timeout
      isVisible = await Element.waitForDisplayed({ timeout });
    } catch (error) {
      isVisible = false;
    }

    console.log("Is Element Displayed ? " + isVisible);
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
          interval: 10000, // Polling interval in milliseconds
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
  public async selectDropdownValuebyText(
    Element: WebdriverIO.Element,
    value: string,
    timeout: number = 200000
  ) {
    try {
      console.log("Executing /selectDropDownvalue by visible text");
      await Element.waitForExist({ timeout });
      await this.clickElm(Element);
      await Element.selectByVisibleText(value);
      console.log("Executed /selectDropDownvalue by visible text");
    } catch (error) {
      console.log(
        "Unable to Execute /selectDropDownvalue by visible text due to the " +
          error
      );
    }
  }

  public async generatIdbydatetime(value: string) {
    try {
      const now = new Date();
      console.log(now.getTime());
      const testdata = await Promise.resolve(value + "" + now.getTime());
      const testdatastring: string = testdata;
      return testdatastring;
    } catch (error) {}
  }

  public async waitUntil(Element: WebdriverIO.Element) {
    try {
      console.log("Executing /waitUntil");
      await this.browser.pause(5000);
      await browser.waitUntil(
        () => {
          return Element.isExisting() && Element.isDisplayed();
        },
        {
          timeout: 20000, // Maximum wait time in milliseconds (adjust as needed)
          timeoutMsg:
            "Element is not displayed within time frame  " + Element.selector, // Error message if the condition is not met within the timeout
        }
      );
      console.log("Executed /clickElm");
    } catch (error) {
      console.log(
        "Unable to execute /waitUntil  with " + Element.selector + "" + error
      );
    }
  }
}
