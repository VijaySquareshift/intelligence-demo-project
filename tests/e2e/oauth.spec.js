// End-to-End Tests for OAuth Flow
const { test, expect } = require('@playwright/test');

test('OAuth authorization flow', async ({ page }) => {
  await page.goto('/auth/login');
  await page.click('text=Sign in with OAuth');
  await expect(page).toHaveURL(/oauth\/authorize/);
});

test('OAuth token exchange', async ({ page, context }) => {
  // Simulate OAuth callback
  await page.goto('/auth/callback?code=test_code');
  const cookies = await context.cookies();
  expect(cookies.find(c => c.name === 'access_token')).toBeDefined();
});
