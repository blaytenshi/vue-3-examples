import { test, expect } from "@playwright/test";

test.describe("Playwright Basics Page", () => {
  test("should display the correct elements", async ({ page }) => {
    // Navigate to the Playwright Basics page
    await page.goto("http://localhost:3030/playwright-basics");

    const header = await page.locator("h1");
    await expect(header).toHaveText("Playwright Testing");
  });
});
