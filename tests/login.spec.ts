import { test, expect } from '@playwright/test';
import 'dotenv/config'
import { LoginPage } from '../pages/LoginPage';
test('Upon successful login, user is redirected to the inventory page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(process.env.USER_NAME!, process.env.PASSWORD!);
  await expect(page).toHaveURL("/inventory.html");
});

test('Attempt to sign in using a wrong username', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('invalid_user', process.env.PASSWORD!);
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('Attempt to sign in using a wrong password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(process.env.USER_NAME!, 'wrong');
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('Attempt to log in with blank username and password fields', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('', '');
  await expect(page.locator('[data-test="error"]')).toBeVisible();
})