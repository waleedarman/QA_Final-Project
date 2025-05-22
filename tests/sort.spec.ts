import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import 'dotenv/config'

test.describe('Sort Feature (from A-Z and Price from High to Low)',()=>{

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.USER_NAME!,process.env.PASSWORD!);
  });

test('sort from A to Z', async ({ page }) => {
  const items = await page.locator('.inventory_item_name').allTextContents();
  const cleaned = items.map(text => text.trim().toLowerCase());
  const sorted = [...cleaned].sort();
  console.log('Actual order:', cleaned);
  console.log('Expected sorted order:', sorted);
  expect(cleaned).toEqual(sorted);

});

test('sort from high to low', async ({ page }) => {
  await page.locator('[data-test="product-sort-container"]').selectOption('hilo');
  const prices = await page.locator('.inventory_item_price').allTextContents();
  const cleaned = prices.map(text => parseFloat(text.replace('$', '').trim()));
  const sorted = [...cleaned].sort((a, b) => b - a);
  console.log('Actual prices:', cleaned);
  console.log('Expected sorted prices:', sorted);
  expect(cleaned).toEqual(sorted);
});
});