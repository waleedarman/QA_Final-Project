import { Page, expect } from "@playwright/test";
export class CheckoutPage {
  private cartLink;
  private checkoutButton;
  private firstNameField;
  private lastNameField;
  private postalCodeField;
  private continueButton;
  private finishButton;
  private completeHeader;

  constructor(private page: Page) {
    this.cartLink = this.page.locator('[data-test="shopping-cart-link"]');
    this.checkoutButton = this.page.locator('[data-test="checkout"]');
    this.firstNameField = this.page.locator('[data-test="firstName"]');
    this.lastNameField = this.page.locator('[data-test="lastName"]');
    this.postalCodeField = this.page.locator('[data-test="postalCode"]');
    this.continueButton = this.page.locator('[data-test="continue"]');
    this.finishButton = this.page.locator('[data-test="finish"]');
    this.completeHeader = this.page.locator('.complete-header');
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async checkout(firstName: string, lastName: string, postalCode: string) {
    await this.checkoutButton.click();
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.postalCodeField.fill(postalCode);
    await this.continueButton.click();
    await this.finishButton.click();
  }

  async verifyOrderCompletion() {
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
  }
}
