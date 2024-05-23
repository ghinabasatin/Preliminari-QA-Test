import { test, expect } from '@playwright/test';

test('Car Rental search and selection on Traveloka', async ({ page }, testInfo) => {
  // Define dynamic inputs
  const pickupLocation = testInfo.project.use?.pickupLocation || 'Jakarta';
  const pickupDate = testInfo.project.use?.pickupDate || '28';
  const dropoffDate = testInfo.project.use?.dropoffDate || '31';
  const pickupTime = testInfo.project.use?.pickupTime || '11:00';
  const dropoffTime = testInfo.project.use?.dropoffTime || '12:00';
  const carName = testInfo.project.use?.carName || 'Daihatsu Ayla';
  const providerName = testInfo.project.use?.providerName || 'Provider Name';

  // Go to Traveloka homepage
  await page.goto('https://www.traveloka.com/en-id');
  
  // Click on the Car Rental tab
  await page.click('a[href*="car-rental"]');
  
  // Fill in the pickup location
  await page.getByTestId('rental-search-form-location-input').click();
  await page.fill('rental-search-form-location-input[name="pickupLocation"]', pickupLocation);
  await page.click(`text=${pickupLocation}`);
  
  // Select the pickup date
  await page.click('input[name="pickupDate"]');
  await page.click(`.calendar-day:has-text("${pickupDate}")`);
  
  // Select the pickup time
  await page.click('input[name="pickupTime"]');
  await page.click(`text=${pickupTime}`);
  await page.click('button:has-text("Done")');
  
  // Select the drop-off date
  await page.click('input[name="dropoffDate"]');
  await page.click(`.calendar-day:has-text("${dropoffDate}")`);
  
  // Select the drop-off time
  await page.click('input[name="dropoffTime"]');
  await page.click(`text=${dropoffTime}`);
  await page.click('button:has-text("Done")');
  
  // Submit the search form
  await page.click('button:has-text("Search")');
  
  // Wait for the results to load and verify that car listings are visible
  await page.waitForSelector('.car-listing');
  await expect(page.locator('.car-listing')).toBeVisible();

  // Select a specific car by name
  await page.click(`text=${carName}`);
  
  // Choose a car from a specific provider
  await page.waitForSelector('.provider-name');
  await page.click(`text=${providerName}`);

  // Verify that the car details page is displayed
  await expect(page.locator('.car-details')).toBeVisible();
});
