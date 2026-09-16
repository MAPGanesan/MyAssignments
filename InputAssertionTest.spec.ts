import {expect, test} from '@playwright/test'

test('PLaywright Input and Assertions Practice', async ({page}) => {
    
    //1. Navigate to the Page
    const URL = 'https://leafground.com/input.xhtml'
    await page.goto(URL)
    
    //2. Validate a Disabled Textbox
    //expect(await page.locator('//input[@placeholder="Disabled"]')).toBeDisabled()
    const disabledTextbox = page.locator('//input[@placeholder="Disabled"]')
    await expect(disabledTextbox).toBeDisabled()
    console.log('Textbox is Disabled and non-editable');

    //3. Validate an Enabled Textbox
    //expect(await page.locator('//div[@class="grid formgrid"]//input[@placeholder="Babu Manickam"]')).toBeEditable()
    const usernameTextbox = page.locator('//div[@class="grid formgrid"]//input[@placeholder="Babu Manickam"]')
    await expect(usernameTextbox).toBeEditable()
    await usernameTextbox.fill('Ganesan')

    //5. Clear existing value and Fill Data
    const clearAndEditValue = page.locator('//h5[text()="Clear the typed text."]/following::input[@value="Can you clear me, please?"]')
    await expect(clearAndEditValue).toBeEditable()
    await clearAndEditValue.fill('')
    await clearAndEditValue.fill('Playwright Testing')
    
    //4. Soft Assertion Practice
    const editTextboxAssertion = page.locator('//textarea[@placeholder="About yourself"]')
    await expect(editTextboxAssertion).toBeDisabled({timeout:20000})
    
})