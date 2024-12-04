import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page, colorScheme }) => {
    // Get into the browsing context group
    await page.goto("");

    // Force the correct color scheme
    await page.emulateMedia({
        colorScheme: colorScheme,
    });
});

test("matches screenshot", async ({ page }) => {
    await page.goto("");

    await expect(page).toHaveScreenshot({
        fullPage: true,
    });
});