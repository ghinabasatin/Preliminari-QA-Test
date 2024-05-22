import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://www.traveloka.com/en-id');
  await page.getByTestId('product-pill-Car Rental').getByText('Car Rental').click();
  await page.getByTestId('rental-search-form-location-input').click();
  await page.getByTestId('rental-search-form-location-input').fill('Jakarta');
  await page.getByLabel('Jakarta', { exact: true }).getByText('Jakarta', { exact: true }).click();
  await page.getByTestId('rental-search-form-date-input-start').click();
  await page.locator('div:nth-child(28) > div > div > div:nth-child(2) > div:nth-child(2) > .css-901oao').first().click();
  await page.getByTestId('rental-search-form-time-input-start').click();
  await page.locator('div:nth-child(11) > .css-901oao').click();
  await page.locator('div:nth-child(3) > div:nth-child(2) > div > div > div:nth-child(2) > .css-901oao').first().click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByTestId('rental-search-form-date-input-end').click();
  await page.locator('div:nth-child(7) > div > div:nth-child(2) > div > div > div > div > div > div > div > div > div:nth-child(3) > div:nth-child(31) > div > div > div:nth-child(2) > div:nth-child(2) > .css-901oao').first().click();
  await page.getByTestId('rental-search-form-time-input-end').click();
  await page.locator('div:nth-child(12) > .css-901oao').click();
  await page.locator('div:nth-child(3) > div:nth-child(2) > div > div > div:nth-child(2) > .css-901oao').first().click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByTestId('rental-search-form-cta').click();
});