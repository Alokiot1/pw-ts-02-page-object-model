![Playwright Tests](https://github.com/Alokiot1/pw-ts-02-page-object-model/actions/workflows/playwright.yml/badge.svg)

# SauceDemo Page Object Model (Playwright + TypeScript)

Tests for https://www.saucedemo.com using the Page Object Model.

## Structure
- `pages/` - LoginPage, InventoryPage
- `tests/` - cart tests

## Covered
- Login through a page object
- Add item to cart
- Verify item in cart

## Run
npm ci
npx playwright install
npx playwright test
npx playwright show-report