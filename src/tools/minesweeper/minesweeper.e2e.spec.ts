import { test, expect } from '@playwright/test';

test.describe('Tool - Minesweeper', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/minesweeper');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Minesweeper - IT Tools');
  });

  test('', async ({ page }) => {

  });
});