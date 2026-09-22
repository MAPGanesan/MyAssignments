import { expect, test } from "@playwright/test"
import { log } from "node:console";

test('Handle Promt Dialog with Playwright', async ({ page }) => {

    page.on('dialog', async (alert) => {
        let alertType = alert.type();
        console.log('Type of alert is', alertType);
        await alert.accept('Playwright');
        let alertMessage = alert.message();
        console.log('Alert message shown in promt is :', alertMessage);

    })
    await page.goto('https://www.leafground.com/alert.xhtml')
    await page.locator('(//span[text()="Show"])').nth(4).click()

    const result = await page.locator('#confirm_result').textContent()
    console.log(result);

    await expect(page.locator('[id="confirm_result"]')).toContainText('Playwright')
})