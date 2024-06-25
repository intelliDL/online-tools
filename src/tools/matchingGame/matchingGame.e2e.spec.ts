import { test, expect } from '@playwright/test';

test.describe('Tool - MatchingGame', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/matchingGame');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('MatchingGame - IT Tools');
  });

  test('', async ({ page }) => {

  });
});