import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(process.env.USER_NAME!, process.env.PASSWORD!);
});

test('Checkout test case', async ({ page }) => {
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.goToCart();
  await checkoutPage.checkout('waleed', 'arman', '+972');

  await checkoutPage.verifyOrderCompletion();
});
