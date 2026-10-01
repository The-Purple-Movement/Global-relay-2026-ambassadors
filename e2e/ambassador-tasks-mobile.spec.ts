import { test, expect } from '@playwright/test';

test.describe('Ambassador Tasks - Mobile Layout', () => {
  // Use a strict mobile viewport size
  test.use({ viewport: { width: 400, height: 800 } });

  test('Task cards should not overflow the viewport width', async ({ page }) => {
    await page.goto('/');
    
    // Find the task card by finding the parent card
    const taskCard = page.locator('div.rounded-2xl', { hasText: 'Bring 10 people to register' }).first();
    
    // Make sure it's visible
    await expect(taskCard).toBeVisible();

    // Scroll it into view to ensure accurate bounding box
    await taskCard.scrollIntoViewIfNeeded();

    // Get the bounding box of the card and the viewport width
    const cardBox = await taskCard.boundingBox();
    const viewportWidth = page.viewportSize()?.width || 400;

    expect(cardBox).not.toBeNull();
    if (cardBox) {
      // The right edge of the card should be within the viewport
      const cardRightEdge = cardBox.x + cardBox.width;
      
      // We allow a tiny sub-pixel tolerance, but it should definitely be less than viewport width
      // Actually, since it has padding, the card right edge should be less than viewportWidth - 24px (px-6 padding)
      expect(cardRightEdge).toBeLessThanOrEqual(viewportWidth);
    }
  });
});
