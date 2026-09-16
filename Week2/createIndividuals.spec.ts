/* Assignment: 3 Create Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
7. Click save and verify Individuals Name */

import {test} from '@playwright/test'

test('Create a Individual', async ({page}) => {
    await page.goto('https://login.salesforce.com')
    await page.locator('[id="username"]').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#Login').click()
    await page.locator('[type="password"]').fill('TestLeaf@2025')
    await page.locator('[value="Log In"]').click()

    await page.locator('//div[@class="slds-icon-waffle"]').click()
    await page.locator('//button[@aria-label="View All Applications"]').click()
    await page.locator('a[data-label="Individuals"]').click()

    await page.locator('//span[@class="slds-assistive-text" and text()="Individuals List"]/parent::a').click()

    await page.locator('//span[text()="New Individual"]').click()

    await page.locator('[placeholder="Last Name"]').fill('Guru')

    await page.locator('//span[text()="Save"]').click()

})