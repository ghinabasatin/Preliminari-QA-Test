import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.traveloka.com/en-id');
  await page.getByTestId('product-nav').getByRole('link', { name: 'Car Rental' }).click();
  await page.getByRole('radio', { name: 'Without Driver' }).click();
  await page.getByTestId('rental-search-form-location-input').click();
  await page.getByTestId('rental-search-form-location-input').fill('jakarta');
  await page.getByText('Jakarta Special Capital').click();
  await page.getByTestId('rental-search-form-date-input-start').click();
  await page.locator('div:nth-child(28) > div > div > div:nth-child(2) > div:nth-child(2) > .css-901oao').first().click();
  await page.getByTestId('rental-search-form-time-input-start').click();
  await page.locator('div:nth-child(11) > .css-901oao').click();
  await page.getByText('0', { exact: true }).nth(1).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByTestId('rental-search-form-date-input-end').click();
  await page.locator('div:nth-child(5) > div > div:nth-child(2) > div > div > div > div > div > div > div > div > div:nth-child(3) > div:nth-child(31) > div > div > div:nth-child(2) > div:nth-child(2) > .css-901oao').first().click();
  await page.getByTestId('rental-search-form-time-input-end').click();
  await page.locator('div:nth-child(11) > .css-901oao').click();
  await page.locator('div:nth-child(2) > div > div > div > div:nth-child(3) > div:nth-child(2) > div > div > div:nth-child(2) > .css-901oao').click();
  await page.getByTestId('rental-search-form-cta').click();
  await page.locator('div').filter({ hasText: /^Daihatsu AylaAUTOMATIC2 baggages4 seats$/ }).getByRole('heading').click({
    button: 'right'
  });
  await page.locator('div').filter({ hasText: /^Daihatsu AylaAUTOMATIC2 baggages4 seats$/ }).getByRole('heading').click();
  await page.locator('div').filter({ hasText: /^Daihatsu AylaAUTOMATIC2 baggages4 seats$/ }).getByRole('heading').click();
  await page.locator('div:nth-child(5) > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(3) > .css-18t94o4').click();
  
});