import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';

test('add item to cart', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await inventory.addToCart('Sauce Labs Backpack');
  await inventory.openCart();

  await expect(page.locator('.cart_item')).toContainText('Sauce Labs Backpack');
});