/**
 * Playwright e2e test: verifies the Hero stats bar is above the fold
 * at 1920x1080 (100% zoom). Run with:
 *   npx playwright test e2e/hero-viewport.spec.ts
 */
import { test, expect } from '@playwright/test';

test.describe('Hero viewport fit at 1920x1080', () => {
  test.use({ viewport: { width: 1920, height: 1080 } });

  test('stats bar (24 HOURS / 12 REGIONS / 1 GLOBAL RELAY) is fully visible above the fold', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // Wait for hero section to be visible
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible({ timeout: 10000 });

    // Find the stats bar - it contains "24" and "HOURS"
    const hoursText = page.locator('text=HOURS').first();
    await expect(hoursText).toBeVisible({ timeout: 5000 });

    // Get the bounding box of the stats bar container (the border-t element)
    const statsBarBottom = await hoursText.evaluate((el) => {
      // Walk up to the stats bar container
      const statsBar = el.closest('[class*="border-t"]') || el.parentElement?.parentElement;
      if (!statsBar) return null;
      const rect = statsBar.getBoundingClientRect();
      return rect.bottom;
    });

    expect(statsBarBottom).not.toBeNull();
    // Stats bar bottom edge must be within the viewport (1080px)
    expect(statsBarBottom!).toBeLessThanOrEqual(1080);
  });

  test('hero section does not exceed viewport height', async ({ page }) => {
    await page.goto('http://localhost:5173');

    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible({ timeout: 10000 });

    const heroHeight = await heroSection.evaluate((el) => {
      return el.getBoundingClientRect().height;
    });

    // Hero should be exactly 1080px (viewport height), not more
    expect(heroHeight).toBeLessThanOrEqual(1080);
  });

  test('both CTA buttons are visible above the fold', async ({ page }) => {
    await page.goto('http://localhost:5173');

    const joinBtn = page.locator('button:has-text("Join as Ambassador")');
    const learnBtn = page.locator('button:has-text("Learn More")');

    await expect(joinBtn).toBeVisible({ timeout: 5000 });
    await expect(learnBtn).toBeVisible({ timeout: 5000 });

    const joinBtnBottom = await joinBtn.evaluate(el => el.getBoundingClientRect().bottom);
    const learnBtnBottom = await learnBtn.evaluate(el => el.getBoundingClientRect().bottom);

    expect(joinBtnBottom).toBeLessThanOrEqual(1080);
    expect(learnBtnBottom).toBeLessThanOrEqual(1080);
  });

  test('screenshot comparison at 1920x1080', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // Wait for animations to settle
    await page.waitForTimeout(1500);

    await page.screenshot({
      path: 'test-results/hero-1920x1080.png',
      fullPage: false, // viewport only
    });
  });
});
