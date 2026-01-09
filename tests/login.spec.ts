import { test, expect } from '@playwright/test';
const LOGIN_URL = 'https://lowkey-testing.sanmark.dev/login';


  // 1 Valid Login
  test('Should login successfully and redirect to home page', async ({ page }) => {
    await page.goto(LOGIN_URL);
    await page.fill('input[name="email"]', 'lanka@thesanmark.com');
    await page.fill('input[name="password"]', 'Lanka123#');
    await page.click('button[type="submit"]');
  
    });
