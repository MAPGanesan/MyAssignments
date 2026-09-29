import { expect, test } from "@playwright/test"
import path from 'path'

test('Uploading Multiple Files', async ({ page }) => {
    await page.goto('https://www.leafground.com/file.xhtml')
    let multiFileUpload = page.locator('(//input[@type="file"])[2]')

    await multiFileUpload.setInputFiles([
        path.join(__dirname, '../../Data/radhe radhe.jpg'),
        path.join(__dirname, '../../Data/Vel Mayil Murugan.jpg')
    ])

    await expect(page.locator('//div[text()="radhe radhe.jpg"]')).toBeVisible()
    await expect(page.locator('//div[text()="Vel Mayil Murugan.jpg"]')).toBeVisible()

    console.log('The files are successfully uploaded!');

})