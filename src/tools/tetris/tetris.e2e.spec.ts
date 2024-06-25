import { test, expect } from '@playwright/test';

test.describe('Tool - Tetris', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tetris');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Tetris - IT Tools');
  });

  test('', async ({ page }) => {

  });
});