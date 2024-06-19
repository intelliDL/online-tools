import { test, expect } from '@playwright/test';

test.describe('Tool - Regex', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/regex');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Regex - IT Tools');
  });

  test('', async ({ page }) => {

  });
});