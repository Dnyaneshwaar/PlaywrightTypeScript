import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/login');
  await expect(page.getByRole('link', { name: 'Tricentis Demo Web Shop' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
  await expect(page.locator('h1')).toContainText('Welcome, Please Sign In!');
  await page.getByRole('listitem').filter({ hasText: 'Books' }).nth(2).click();
});