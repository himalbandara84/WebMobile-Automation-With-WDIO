import { TestData } from "../../configurations/test-data";
const webSecret = process.env.WEB_USER_SECRET;
const mobileSecret = process.env.MOBILE_USER_SECRET;
const lineManagerSecret = process.env.LINE_MANAGER_SECRET;
export const staging: TestData = {
  Mob_Username: "DIT_Supervisor@orsted.com",
  Mob_Password: mobileSecret,

  Web_Username: "DIT_Scope_Manager@orsted.com",
  Web_Password: webSecret,

  LineManagerUsername: "DIT_Line_Manager@orsted.com",
  LineManagerPassword: lineManagerSecret,
};
