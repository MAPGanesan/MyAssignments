import { test } from "@playwright/test";

test('Create Lead Using CSS Selectors', async ({page}) => {
    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill('democsr2')
    await page.locator('[id="password"]').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()

    await page.locator('text="CRM/SFA"').click()
    await page.locator('a[href="/crmsfa/control/leadsMain"]').click()
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click()
    await page.locator('#createLeadForm_companyName').fill('Test Leaf Pvt Ltd')
    await page.locator('#createLeadForm_firstName').fill('Ganesh')
    await page.locator('#createLeadForm_lastName').fill('A')
    await page.locator('#createLeadForm_personalTitle').fill('Mr.')
    await page.locator('#createLeadForm_generalProfTitle').fill('QA Tester')
    await page.locator('input[name="annualRevenue"]').fill('500000')
    await page.locator('input[name="departmentName"]').fill('QA')
    
    let sourceDropdown = page.locator('select#createLeadForm_dataSourceId')
    let sourceOptions = sourceDropdown.locator('option')
    let optionCount = await sourceOptions.count()

    for(let i=0; i<optionCount; i++){
        let value = await sourceOptions.nth(i).getAttribute('value')
        let text = await sourceOptions.nth(i).innerText()
        console.log(`${text}`);
    }

    await page.locator('#createLeadForm_primaryPhoneNumber').fill('9876543211')
    await page.locator('.smallSubmit').click()

})