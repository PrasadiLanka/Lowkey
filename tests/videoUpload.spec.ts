
import { expect, test } from '@playwright/test';
import { login } from '../utils/successLogin.spec';

test('form-1 fill', async function ({ page }) {

        await login(page);

        await page.click('//span[normalize-space()="Video upload"]');
        await page.fill('//input[@id="title"]', "video-4");
        await page.fill('//textarea[@id="description"]', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
        await page.fill('//input[@id="price"]', "1000");
        await page.click('//input[@placeholder="Add relevant tags"]');

        const optionsToSelect: string[] = ['Action', 'Comedy','Documentary','Adventure','Drama','Fantasy','Horror','Romance','Sci-Fi','Thriller'];
        for (const text of optionsToSelect) {
            await page.locator('//div[@role="option"]').filter({ hasText:text}).first().click();
        }

        await page.click('//button[normalize-space()="Select a video"]');

        const videoPath = "/home/lanka/Downloads/Man vs Baby.mp4"; 
        await page.setInputFiles('input[type="file"]', videoPath);

     // Wait until the upload finishes and Publish button is enabled
    const publishButton = page.locator('//button[normalize-space()="Publish video"]');
    await expect(publishButton).toBeEnabled({ timeout: 120000 }); // wait up to 2 mins if upload is large

    // Click Publish
    await publishButton.click();

    // Wait for success toast
    await expect(
        page.locator('div[role="status"]', { hasText: 'Video uploaded & saved!' })
    ).toBeVisible({ timeout: 120_000 }); // wait up to 2 mins

         console.log("Video uploaded successfully");
    });