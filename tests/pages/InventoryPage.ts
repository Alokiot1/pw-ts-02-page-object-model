import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addToCart(itemName: string) {
    await this.page
      .locator('.inventory_item', { hasText: itemName })
      .getByRole('button', { name: 'Add to cart' })
      .click();
  }

  async openCart() {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }
}