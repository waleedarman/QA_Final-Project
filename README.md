# 🧪 SauceDemo Playwright Testing Framework

A modern Playwright + TypeScript test automation project for validating the core features of [SauceDemo](https://www.saucedemo.com/) as part of the Software Testing and Quality Assurance course (Second Semester 2024/2025).

## 📁 Project Structure

```
.
├── pages/
│   ├── LoginPage.ts              # Page object for login functionality
│   ├── CartPage.ts               # Page object for cart operations
│   ├── CheckoutPage.ts           # Page object for checkout process
│   └── SortPage.ts               # Page object for sorting tests

├── tests/
│   ├── login.spec.ts             # Tests for login (valid/invalid)
│   ├── cart.spec.ts              # Tests for add/remove cart items
│   ├── checkout.spec.ts          # Tests for checkout flow
│   ├── sort.spec.ts              # Tests for product sorting

├── tests-examples/               # Optional extra examples or drafts

├── .env                          # Contains credentials like USER_NAME and PASSWORD
├── .gitignore
├── package.json
├── playwright.config.ts          # Playwright global configuration
└── README.md                     # Project documentation
```

## ✅ Features Covered

This framework tests the following key functionalities of the SauceDemo website:

- 🔐 **Login**
- 🛒 **Add to Cart**
- 🧹 **Remove from Cart**
- ✅ **Checkout**
- ↕️ **Sort Products** (A–Z, Price High to Low)

## ⚙️ Technologies Used

- [Playwright](https://playwright.dev/)
- TypeScript
- Page Object Model (POM)
- dotenv for parameterized login
- Hooks (`beforeEach`) for DRY test setup
- Support for multi-browser testing

## 🚀 How to Run

1. **Install Dependencies**

```bash
npm install
```

2. **Setup Environment**

Create a `.env` file at the root:

```env
USER_NAME=standard_user
PASSWORD=secret_sauce
```

3. **Run All Tests**

```bash
npx playwright test
```

4. **Run in Specific Browser**

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
```

## 📌 Example Test Case

### Login Test

```ts
test('User is redirected to the inventory page after successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(process.env.USER_NAME!, process.env.PASSWORD!);
  await expect(page).toHaveURL("/inventory.html");
});
```

### Remove from Cart

```ts
test('Remove from cart', async ({ page }) => {
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  await expect(page.locator('.cart_item')).toHaveCount(0);
});
```

## 🧪 Test Execution Output

The project uses clear naming and assertions to provide readable and maintainable output logs.

---

## 📅 Assignment Details

- **Course**: Software Testing and Quality Assurance
- **Semester**: Spring 2024/2025
- **Instructor Requirement**: Use Playwright + TypeScript with POM and grouped test files.
- **Deadline**: 25 May (Midnight) ⏳
- **Created by** : Ahmad Irshaid and Waleed Arman

---

## 🔗 Author

Developed and maintained by **Ahmad IrSahaid** and **Waleed Arman**.  
View on GitHub → _[https://github.com/waleedarman/SauceDemo-E2E-Testing-Playwright.git]_ (Insert your GitHub repository link)
