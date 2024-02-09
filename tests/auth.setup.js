import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByTestId("login-button").click();
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
 
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  await expect(page.locator('#item_4_title_link')).toBeVisible();

  // End of authentication steps.

  console.log("login done");
  await page.context().storageState({ path: authFile });
});