import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.USER_NAME!, process.env.PASSWORD!);
  });
   test('add to cart test case', async ({ page }) => {
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('.cart_item')).toHaveCount(4);
  });