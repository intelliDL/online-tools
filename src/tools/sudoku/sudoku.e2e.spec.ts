import { test, expect } from '@playwright/test';

test.describe('Tool - Sudoku', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/sudoku');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Sudoku - IT Tools');
  });

  test('', async ({ page }) => {

  });
});