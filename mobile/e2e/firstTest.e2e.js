const { reloadApp } = require("detox-expo-helpers");
const { testIdLogin } = require("./testId");

describe("App", () => {
  // beforeEach(async () => {
  //   await reloadApp();
  // });
  it("Should open otp screen and press login button", async () => {
    await element(by.id(testIdLogin.LOGIN_BUTTON)).tap();
  });
  it("Should open otp screen and press login button", async () => {
    await element(by.id(testIdLogin.OTP_INPUT_VIEW))
      .atIndex(0)
      .typeText("123456");
    await element(by.id(testIdLogin.LOGIN_BUTTON)).tap();
  });

  it("Should type otp and go to Home screen", async () => {
    await element(by.id(testIdLogin.OTP_INPUT_VIEW)).atIndex(0).clearText();
    await element(by.id(testIdLogin.OTP_INPUT_VIEW))
      .atIndex(0)
      .typeText("123457");
    await element(by.id(testIdLogin.LOGIN_BUTTON)).tap();
  });
});
