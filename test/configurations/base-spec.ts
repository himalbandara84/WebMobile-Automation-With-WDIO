import { TestData } from "./test-data";
import { staging } from "../resources/test-data/staging";
import { development } from "../resources/test-data/development";
import { multiremote } from "webdriverio";
import type { Options } from "@wdio/types";
import { capabilities } from "./capabilities";
const ENV = process.env.ENV;
import { browser, multiremotebrowser } from "@wdio/globals";
let MyChromeBrowser = multiremotebrowser.getInstance("MyChromeBrowser");

export function generateTestData(): TestData {
  let testData: TestData;
  console.log("Enviroment :" + ENV);
  if (ENV == "stg") {
    testData = staging;
    console.log("test data Env: Staging");
  } else if (ENV == "qa") {
    testData = development;
    console.log("test data Env: Development");
  }

  return testData;
}

export function generateDriver() {
  console.log("Get Url" + this.browser.getUrl);
  console.log(process.env.EN);
  this.browser.maximizeWindow();
  this.browser.url("/");
}

export async function generatIdbydatetime(value: any) {
  let testdatastring: string;
  try {
    const now = new Date();
    console.log(now.getTime());
    const testdata = await Promise.resolve(value + "" + now.getTime());
    testdatastring = testdata;
  } catch (error) {}
  return testdatastring;
}

export async function getCurrentDate() {
  let fullDate: string;
  try {
    const now = new Date();
    const year = now.getFullYear().toString();
    // Months are zero-based, so add 1 to get the correct month
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const date = now.getDate().toString().padStart(2, "0");
    fullDate = `${date}/${month}/${year}`;
    console.log("Date: " + fullDate);
  } catch (error) {
    console.log("Unable to execute /getCurrentDate: " + error);
    // Handle the error if needed
  }
  return fullDate;
}
