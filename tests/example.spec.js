// @ts-check
import { test, expect } from '@playwright/test';

test('Login as Standard User', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  // Assertion after login
  await expect(page.locator('#item_4_title_link')).toBeVisible();
});

test('Login as Visual User', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  // Assertion after login
  await expect(page.locator('#item_4_title_link')).toBeVisible();

  
});
