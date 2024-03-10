# Test

ENV=stg npx wdio run test/wdio.conf.ts

# References

- after folder update execute this command to resolve the tsconfig errors :
  VSCode, you can press Cmd/Ctrl + Shift + P and search for Typescript: Restart TS Server.

- run appium in command line :
  appium --address 127.0.0.1 --port 4723

          https://www.gizra.com/content/wdio-multiremote-tests/

- open Allure Report
  allure generate ./allure-report && allure open

- git commands

  git restore [path] - to remove local uncommited changes
