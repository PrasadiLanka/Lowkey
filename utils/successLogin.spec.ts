import { test, expect } from '@playwright/test';
import { Page } from '@playwright/test';

const LOGIN_URL = 'https://lowkey-testing.sanmark.dev/login';


   // 1 Valid Login
  //test('login', async ({ page }) => {
  export async function login(page: Page){
    
    await page.goto(LOGIN_URL);
    await page.fill('input[name="email"]', 'lanka@thesanmark.com');
    await page.fill('input[name="password"]', 'Lanka123#');
    await page.click('button[type="submit"]');
  //)
    };
