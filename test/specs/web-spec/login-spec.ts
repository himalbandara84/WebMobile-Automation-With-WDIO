import {
  TestData,
  generateTestData,
  WebLoginPage,
} from "../../configurations/imports";
describe("faq-spec", () => {
  let testdata: TestData;
  let ObjWebLoginPage;
  let ObjWebLandingPage;
  let MyChromeBrowser;
  before("setup", async () => {
    MyChromeBrowser = multiremotebrowser.getInstance("MyChromeBrowser");
    ObjWebLoginPage = new WebLoginPage(MyChromeBrowser);
    testdata = generateTestData();
  });
  beforeEach("Login to the application ", async () => {
    await ObjWebLoginPage.navigate();
  });
  it("C1407195 Validate Fist Time Login", async () => {
    await expect(
      await ObjWebLoginPage.login(testdata.Web_Username, testdata.Web_Password)
    ).toEqual(true);
  });

  afterEach("logout from the application", async () => {});
});
