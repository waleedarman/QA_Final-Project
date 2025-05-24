import { test, expect } from '@playwright/test';
import 'dotenv/config'
import { LoginPage } from '../pages/LoginPage';

test('User is redirected to the inventory page after successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await page.waitForTimeout(3000);
  await loginPage.login(process.env.USER_NAME!, process.env.PASSWORD!);
  await page.waitForTimeout(3000);
  await expect(page).toHaveURL("/inventory.html");
});

test('Login fails when using an incorrect username', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await page.waitForTimeout(3000);
  await loginPage.login('invalid_user', process.env.PASSWORD!);
  await page.waitForTimeout(3000);
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('Login fails when using an incorrect password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await page.waitForTimeout(3000);
  await loginPage.login(process.env.USER_NAME!, 'wrong');
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('Login fails when both username and password fields are empty', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await page.waitForTimeout(3000);
  await loginPage.login('', '');
  await page.waitForTimeout(3000);
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});
