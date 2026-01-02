import { test, expect } from '@playwright/test';

const pageUrl = "https://lowkey-testing.sanmark.dev/register";

test('register ', async ({ page }) => {
  await page.goto(pageUrl);
  await page.waitForTimeout(2000); 
 });

test('form-1 fill', async({page})=>{
    await page.goto(pageUrl);
    await page.fill('//input[@id="name"]',"Namal");
    await page.fill('//input[@id="last_name"]',"Rajapaksha");
    await page.fill('//input[@id="email"]',"Rajapaksha");
    await page.fill('//input[@id="phone"]',"+94762942465");
    //************//
    await page.fill('//input[@id="password"]',"Lanka123#");
    await page.fill('//input[@id="password_confirmation"]',"Lanka123#");
    await page.click('//button[normalize-space()="Continue"]');
    
    
});


