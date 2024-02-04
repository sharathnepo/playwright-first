// @ts-check
import { test, expect } from '@playwright/test';

test('Login as Standard User', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Enter user name
  await page.getByPlaceholder("Username").fill("standard_user");

  // Enter password
  await page.getByPlaceholder("Password").fill("secret_sauce");

  
  // Click login button
  await page.getByTestId("login-button").click();
  
  // Assertion after login
  await expect(page.locator('#item_4_title_link')).toBeVisible();
});

test('Login as Visual User', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Enter user name
  await page.getByPlaceholder("Username").fill("visual_user");

  // Enter password
  await page.getByPlaceholder("Password").fill("secret_sauce");

  
  // Click login button
  await page.getByTestId("login-button").click();

  // Assertion after login
  await expect(page.locator('#item_4_title_link')).toBeVisible();

  
});
