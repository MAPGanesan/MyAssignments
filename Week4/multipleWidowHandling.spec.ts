/* Assignment Details:
Your task is to merge the leads created

Precondition:
- Launch Chromium in non-headless mode
- Use required fixtures
- Navigate to http://leaftaps.com/opentaps/control/main

Requirements:
- Enter the username.
- Enter the password.
- Click the Login button.
- Click CRM/SFA
- Click Leads
- Click Merge Leads
- Click From Lead widget
- Select the first resulting lead id
- Click To Lead widget
- Select the second resulting lead id
- Click Merge button
- Get the message and type of the alert
- Accept the alert
- Click Merge button
- Assert the title of the page */

import { test } from "@playwright/test"
import { log } from "node:console"

test('Multiple Window Handling - Merge Leads', async ({ page, context }) => {
    //Launch and Login to the webpage
    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill('demosalesmanager')
    await page.locator('#password').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()

    //Click CRM/SFA link
    await page.locator('text="CRM/SFA"').click()

    //Click on Leads tab from header
    await page.locator('//a[text()="Leads"]').click()

    //Click on Merge Leads option under Leads
    await page.locator('//a[text()="Merge Leads"]').click()

    //Create Promise to handle Child Windows
    const [childPage1] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('//span[text()="From Lead"]/following::a[1]').click()]);
    await childPage1.waitForLoadState('domcontentloaded');
    await childPage1.locator('(//a[@class="linktext"])[1]').click();

    const [childPage2] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('//span[text()="To Lead"]/following::a[1]').click()]);
    await childPage2.waitForLoadState('domcontentloaded');
    await childPage2.locator('(//div[@class="x-grid3-row    x-grid3-row-alt"]//tr[1]/td[1]//a)[1]').click()
    
    //Event Listener to handling the Alert
    page.on('dialog', async (alert) => {
        console.log(`Alert message: ${alert.message()}`);
        await alert.accept();
    })

    await page.locator('//a[text()="Merge"]').click()

    //Get and print title of the page
    await page.waitForLoadState('domcontentloaded')
    console.log('Title of the page :', await page.title());
    
    //Logout from the session
    await page.locator('//a[text()="Logout"]/ancestor::div[@class="insideHeaderText"]').click()
})