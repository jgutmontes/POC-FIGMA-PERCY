import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';


test('Landing visual test', async ({ page }) => {
  await page.goto('http://localhost:3000'); // tu app real
  await percySnapshot(page, 'Landing actual'); // envía screenshot a Percy
});
