import {test} from '@playwright/test'

test('Edit the created Lead', async ({page}) => {
    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('[id="username"]').fill('democsr2')
    await page.locator('#password').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()

    await page.locator('text="CRM/SFA"').click()
    await page.locator('a[href="/crmsfa/control/leadsMain"]').click()
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click()
    await page.locator('#createLeadForm_companyName').fill('Testleaf India Pvt Ltd')
    await page.locator('#createLeadForm_firstName').fill('Ganesan')
    await page.locator('#createLeadForm_lastName').fill('A')

    await page.locator('.smallSubmit').click()
    await page.locator('//div[@class="frameSectionExtra"]/following::a[text()="Edit"]').click()
    await page.locator('[id="updateLeadForm_companyName"]').fill('Test Leaf Software Pvt Ltd')
    await page.locator('[value="Update"]').click()
})