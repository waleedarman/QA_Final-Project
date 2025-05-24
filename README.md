# 🧪 SauceDemo Playwright Testing Framework

A modern Playwright + TypeScript test automation project for validating the core features of [SauceDemo](https://www.saucedemo.com/) as part of the Software Testing and Quality Assurance course (Second Semester 2024/2025).

## 📁 Project Structure

```
.
├── pages/                 # Page Object Models (e.g., LoginPage.ts)
├── tests/                 # Main test cases per feature
├── tests-examples/        # Additional or experimental tests
├── .env                   # Stores test credentials securely
├── .gitignore
├── package.json
├── playwright.config.ts   # Global Playwright configuration
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

Developed and maintained by **Ahmad IrSahaid** and team.  
View on GitHub → _[https://github.com/waleedarman/QA_Final-Project.git]_ (Insert your GitHub repository link)
