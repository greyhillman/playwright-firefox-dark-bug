import { test, expect } from '@playwright/test';

test("matches screenshot", async ({ page }) => {
  // At this point, the page is in dark-mode

  await page.goto("");

  // Now the page is in light mode

  // Uncomment to get dark mode and thus the expected screenshot
  // await page.emulateMedia({
  //   colorScheme: "dark",
  // });

  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});