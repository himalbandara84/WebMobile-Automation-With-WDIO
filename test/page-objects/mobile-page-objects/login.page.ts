import { ChainablePromiseElement } from "webdriverio";

import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
export default class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */

  //browser : WebdriverIO.Browser

  constructor(browserl: WebdriverIO.Browser) {
    super(browserl);
  }
  private get btnok() {
    return this.browser.$('//XCUIElementTypeButton[@name="OK"]');
  }
  public get inputUsername() {
    return this.browser.$(
      '//XCUIElementTypeTextField[@name="someone@example.com"]'
    );
  }

  public get inputPassword() {
    return this.browser.$(
      '//XCUIElementTypeSecureTextField[@name="Enter the password for dit_supervisor@orsted.com"]'
    );
  }

  public get btnNext() {
    return this.browser.$('//XCUIElementTypeButton[@name="Next"]');
  }
  public get btnSign() {
    return this.browser.$('//XCUIElementTypeButton[@name="Sign in"]');
  }
  public get btnStart() {
    return this.browser.$('(//XCUIElementTypeOther[@name="Start"])[2]');
  }

  public get txtOrsted() {
    return this.browser.$('//XCUIElementTypeStaticText[@name="Sign in"]');
  }

  public get txtFeedBack() {
    return this.browser.$('//XCUIElementTypeButton[@name="Feedback"]');
  }

  public get btnContinue() {
    return this.browser.$('//XCUIElementTypeButton[@name="Continue"]');
  }

  public get btnaccept() {
    return this.browser.$('//XCUIElementTypeButton[@name="Accept"]');
  }

  public get btnfirstSignon() {
    return this.browser.$(
      '(//XCUIElementTypeOther[@name="Pick an account"])[2]/XCUIElementTypeOther[1]'
    );
  }

  /**
   * a method to encapsule automation code to interact with the pages
   * e.g. to login using username and password
   */
  public async login(username: string, password: string) {
    try {
      let text = false;
      let btnOkStatus = false;
      let btnContinuestatus = false;
      let btnacceptstatus = false;
      let exsistingUserstatus = false;
      let exsistUserName = false;
      // this.browser.pause(5000);
      for (let i = 0; i < 5; i++) {
        try {
          // await (await this.btnok).waitForDisplayed({ timeout: 1000 });
          // btnOkStatus = await (await this.btnok).isDisplayed();
          btnOkStatus = await this.validateElmIsDisplayed(
            await this.btnok,
            1000
          );
        } catch (error) {
          btnOkStatus = false;
        }
      }
      if (btnOkStatus) {
        await this.clickElm(await this.btnok);
      }
      await this.clickElm(await this.btnStart);
      for (let i = 0; i < 5; i++) {
        try {
          // await (await this.btnContinue).waitForDisplayed({ timeout: 1000 });
          // btnContinuestatus = await (await this.btnContinue).isDisplayed();
          btnContinuestatus = await this.validateElmIsDisplayed(
            await this.btnContinue,
            1000
          );
        } catch (error) {
          btnContinuestatus = false;
        }
      }
      if (btnContinuestatus == true) {
        await this.clickElm(await this.btnContinue);
      }
      for (let i = 0; i < 5; i++) {
        try {
          // await (await this.inputUsername).waitForDisplayed({ timeout: 1000 });
          // text = await (await this.inputUsername).isDisplayed();
          text = await this.validateElmIsDisplayed(
            await this.inputUsername,
            1000
          );
        } catch (error) {
          text = false;
        }
      }
      if (text == true) {
        await this.clickElm(await this.inputUsername);
        await this.setValueElem(await this.inputUsername, username);
        await this.clickElm(await this.btnNext);
        this.browser.pause(1000);
        for (let i = 0; i < 5; i++) {
          try {
            // await (
            //   await this.inputUsername
            // ).waitForDisplayed({ timeout: 1000 });
            // text = await (await this.inputUsername).isDisplayed();
            text = await this.validateElmIsDisplayed(
              await this.inputUsername,
              1000
            );
          } catch (error) {
            text = false;
          }
        }
        console.log("Status of the login button  " + text);
        if (text == true) {
          while (text == true) {
            try {
              console.log("inside the loop");
              await this.clickElm(await this.inputUsername);
              await this.setValueElem(await this.inputUsername, "\uE003");
              await this.setValueElem(await this.inputUsername, username);
              await this.clickElm(await this.btnNext);
              await this.browser.pause(1000);
              for (let i = 0; i < 5; i++) {
                try {
                  // await (
                  //   await this.inputUsername
                  // ).waitForDisplayed({ timeout: 1000 });
                  // text = await (await this.inputUsername).isDisplayed();
                  text = await this.validateElmIsDisplayed(
                    await this.inputUsername,
                    1000
                  );
                } catch (error) {
                  text = false;
                }
              }
            } catch (error) {
              text = true;
            }
          }
        }
        await this.clickElm(await this.inputPassword);
        await this.setValueElem(await this.inputPassword, password);
        await this.browser.pause(2000);
        for (let i = 0; i < 5; i++) {
          try {
            // await (await this.btnaccept).waitForDisplayed({ timeout: 1000 });
            // btnacceptstatus = await (await this.btnaccept).isDisplayed();
            btnacceptstatus = await this.validateElmIsDisplayed(
              await this.btnaccept,
              1000
            );
          } catch (error) {
            btnacceptstatus = false;
          }
        }
        if (btnacceptstatus == true) {
          await this.clickElm(await this.btnaccept);
        }
        await this.clickElm(await this.btnSign);
      } else {
        for (let i = 0; i < 5; i++) {
          try {
            // await (
            //   await this.btnfirstSignon
            // ).waitForDisplayed({ timeout: 1000 });
            // exsistingUserstatus = await (
            //   await this.btnfirstSignon
            // ).isDisplayed();
            exsistingUserstatus = await this.validateElmIsDisplayed(
              await this.btnfirstSignon,
              1000
            );
          } catch (error) {
            exsistingUserstatus = false;
          }
        }
        if (exsistingUserstatus == true) {
          await this.clickElm(await this.btnfirstSignon);
          await this.clickElm(await this.btnaccept);
        }
      }
    } catch (error) {
      console.log("login matheod faild due to " + error);
    }

    //await this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  // public open () {
  //     return super.open('login');
  // }
}
