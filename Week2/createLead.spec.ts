/* Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the Company Name
9. Click Save and Verify Leads name created */

import {expect, test} from '@playwright/test'

test('Create a Lead', async ({page}) => {
    await page.goto('https://login.salesforce.com')
    await page.locator('[id="username"]').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#Login').click()
    await page.locator('input[name="pw"]').fill('TestLeaf@2025')
    await page.locator('input[type="submit"]').click()
    await page.locator('.slds-icon-waffle').click()
    await page.locator('[aria-label="View All Applications"]').click()
    await page.locator('a.slds-text-heading_small[href="/lightning/app/06mdN00000537gmQAA"]', { hasText: 'Sales' }).click()
    await page.locator('a[title="Leads"]').click()
    await page.locator('div[title="New"]').click()
    await page.getByRole('combobox', {name:'Salutation'}).click()
    await page.getByRole('option', {name:'Mr.'}).click()
    await page.getByPlaceholder('Last Name').fill('Guru')
    await page.locator('[name="Company"]').fill('TestLeaf Pvt Ltd')
    await page.locator('[name="SaveEdit"]').click()
    await expect(page.getByRole('heading', {name:'Mr.  Guru'})).toBeVisible()
})