import { test, expect } from '@playwright/test';

test.describe('App', () => {
  test('should load the main page with correct content', async ({ page }) => {
    // Navigate to the app
    await page.goto('/');

    // console.log('Current base URL:', process.env.PLAYWRIGHT_BASE_URL);
    // console.log('Actual URL used:', page.url());

    // Wait for the main content to be visible
    await page.waitForSelector('h1');

    // Verify the not logged in message
    const heading = page.locator('h1');
    await expect(heading).toHaveText('Vite + React');

    // Verify the count button
    const countButton = page.locator('button');
    await expect(countButton).toHaveText('count is 0');

    // Click the count button
    await countButton.click();
    await expect(countButton).toHaveText('count is 1');

    // Click the count button
    await countButton.click();
    await expect(countButton).toHaveText('count is 2');
  });
});
