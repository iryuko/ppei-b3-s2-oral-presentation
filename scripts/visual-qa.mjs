import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";

const baseUrl = process.env.PPEI_SITE_URL ?? "http://127.0.0.1:5173/";
const screenshotDir = "artifacts/screenshots";
mkdirSync(screenshotDir, { recursive: true });

const browser = await chromium.launch();

const desktop = await browser.newPage({
  viewport: { width: 1440, height: 1100 },
  deviceScaleFactor: 1,
});
await desktop.goto(baseUrl, { waitUntil: "networkidle" });
await desktop.screenshot({ path: `${screenshotDir}/home-desktop.png`, fullPage: false });
await desktop.locator(".floating-nav__trigger").click();
await desktop.waitForTimeout(250);
await desktop.screenshot({ path: `${screenshotDir}/nav-open-desktop.png`, fullPage: false });
await desktop.locator('.floating-nav__panel a[href="#database"]').click();
await desktop.waitForTimeout(400);
await desktop.locator('[role="tab"]').nth(1).click();
const selectedTab = (await desktop.locator('[role="tab"][aria-selected="true"]').textContent())?.trim();
await desktop.screenshot({ path: `${screenshotDir}/database-desktop.png`, fullPage: false });

const mobile = await browser.newPage({
  viewport: { width: 390, height: 900 },
  isMobile: true,
});
await mobile.goto(baseUrl, { waitUntil: "networkidle" });
await mobile.screenshot({ path: `${screenshotDir}/home-mobile.png`, fullPage: false });

await browser.close();

console.log(
  JSON.stringify(
    {
      ok: true,
      baseUrl,
      selectedTab,
      screenshots: [
        `${screenshotDir}/home-desktop.png`,
        `${screenshotDir}/nav-open-desktop.png`,
        `${screenshotDir}/database-desktop.png`,
        `${screenshotDir}/home-mobile.png`,
      ],
    },
    null,
    2,
  ),
);
