// @ts-check
import { test, expect } from '@playwright/test';

test('Login as Standard User', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  
  // Assertion after login to inventary page
  await expect(page.locator('#item_4_title_link')).toBeVisible();

  // Add backpack to cart
  await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
  await page.locator('a').filter({ hasText: '1' }).click();
  await expect(page.getByRole('link', { name: 'Sauce Labs Backpack' })).toBeVisible();

  // Checkout and add mailing address
  await page.getByTestId('checkout').click();
  await page.getByTestId('firstName').click();
  await page.getByTestId('firstName').fill('Sharath');
  await page.getByTestId('lastName').click();
  await page.getByTestId('lastName').fill('Nepoleon');
  await page.getByTestId('postalCode').click();
  await page.getByTestId('postalCode').click();
  await page.getByTestId('postalCode').fill('Zipcode001');
  await page.getByTestId('continue').click();

  // Assert order has been dispatched
  await expect(page.getByText('1Sauce Labs Backpackcarry.')).toBeVisible();
  await expect(page.getByText('Total: $32.39')).toBeVisible();
  await page.getByTestId('finish').click();
  await expect(page.getByText('Your order has been')).toBeVisible();
  await page.getByTestId('back-to-products').click();

  // Assert back to inventory page
  await expect(page.locator('.inventory_item_description').first()).toBeVisible();
});

test('Login as Visual User', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  // Assertion after login
  await expect(page.locator('#item_4_title_link')).toBeVisible();

  
});
