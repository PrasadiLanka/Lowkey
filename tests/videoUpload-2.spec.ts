
// import { expect, test } from '@playwright/test';
// import { login } from '../utils/successLogin.spec';
// import fs from 'fs';

// test('form-1 fill', async function ({ page }) {

//         await login(page);

//         await page.click('//span[normalize-space()="Video upload"]');
//         await page.fill('//input[@id="title"]', "video-4");
//         await page.fill('//textarea[@id="description"]', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
//         await page.fill('//input[@id="price"]', "1000");
//         await page.click('//input[@placeholder="Add relevant tags"]');

//         const optionsToSelect: string[] = ['Action', 'Comedy','Documentary','Adventure','Drama','Fantasy','Horror','Romance','Sci-Fi','Thriller'];
//         for (const text of optionsToSelect) {
//             await page.locator('//div[@role="option"]').filter({ hasText:text}).first().click();
//         }

//         await page.click('//button[normalize-space()="Select a video"]');

//         const videoPath = "/home/lanka/Downloads/Man vs Baby.mp4"; 
//         await page.setInputFiles('input[type="file"]', videoPath);

//         const [presignResponse] = await Promise.all([
//         page.waitForResponse(res =>
//         res.url().includes('/generate/presign/url') &&
//         res.request().method() === 'POST' &&
//         res.status() === 200
//     ),
//     page.click('button:has-text("Publish video")')
//   ]);

//     const presignJson = await presignResponse.json();

//   const uploadUrl = presignJson.data.url;
//   const videoId = presignJson.data.videoId;

//   expect(uploadUrl).toBeTruthy();
//   expect(videoId).toBeTruthy();

//     await page.request.put(uploadUrl, {
//     headers: {
//       'Content-Type': 'video/mp4'
//     },
//     data: fs.readFileSync(videoPath)
//   });

//     await expect.poll(async () => {
//     const res = await page.request.get(
//       `https://api-lowkey-testing.sanmark.dev/api/v1/videos/${videoId}`
//     );

//      if (!res.ok()) return false;

//     const data = await res.json();

//     return (
//       data.title &&
//       data.description &&
//       data.price &&
//       Array.isArray(data.tags) &&
//       data.tags.length > 0
//     );
//   }, {
//     timeout: 300_000,   // 5 minutes
//     interval: 3000      // every 3 seconds
//   }).toBeTruthy();



//          console.log("Video uploaded successfully");
//     });