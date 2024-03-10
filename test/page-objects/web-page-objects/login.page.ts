import { promises } from "dns";
import basePage from "./base-web-page";
import { Selector } from "webdriverio";
export default class LoginPage extends basePage {
  /**
   * define selectors using getter methods
   */

  //browser : WebdriverIO.Browser

  constructor(browserl: WebdriverIO.Browser) {
    super(browserl);
  }

  private get inputUsername() {
    return this.browser.$("//input[@id='user-name']");
  }

  private get inputPassword() {
    return this.browser.$("//input[@id='password']");
  }

  private get btnLogin() {
    return this.browser.$("//input[@id='login-button']");
  }

  private get txtApplogo() {
    return this.browser.$("//div[@class='app_logo']");
  }

  /**
   * a method to encapsule automation code to interact with the pages
   * e.g. to login using username and password
   */
  public async login(username: string, password: string) {
    try {
      await this.setValueElem(await this.inputUsername, username);
      await this.setValueElem(await this.inputPassword, password);
      await this.clickElm(await this.btnLogin);
      return await this.validateElmIsDisplayed(await this.txtApplogo);
    } catch (error) {
      console.log(error);
    }
  }
}
