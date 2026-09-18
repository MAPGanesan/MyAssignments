import {expect, test} from "@playwright/test"

test('PVR Cinemas - Ticket Booking', async ({page}) => {
    await page.goto('https://www.pvrcinemas.com/')
    await page.locator('(//div[@class="cities-names"])[1]').click()
    await page.locator('(//span[@class="cities-placed"])[2]').click()
    await page.locator('(//div[@class="cities-names"])[6]').click()
    await page.locator('.cinemas-inactive').click()
    
    //await page.getByPlaceholder('Select Cinema').click()
    //await page.locator('option:has-text("Select Cinema")').click()
    await page.locator('#cinema').click()

    await page.locator('(//ul[@class="p-dropdown-items"]//span)[1]').click()
    await page.locator('(//div[@class="p-dropdown-items-wrapper"]//li//span)[1]').click()
    //await page.locator('#date').click()
    //await page.locator('(//ul[@class="p-dropdown-items"]//span)[1]').click()
    
    //await page.locator('#movie').click()
    await page.locator('//span[text()="MANDAADI"]/parent::li').click()
    //await page.locator('//div[@class="p-dropdown-items-wrapper"]//ul//li//span[text()="12:05 PM"]').click()
    await page.locator('li.p-dropdown-item').nth(3).click()
    await page.locator('[aria-label="Submit"]').click()
    await page.getByRole('button',{name:'Accept'}).click()

    await page.locator('span#SL\\.SILVER\\|H\\:10').click()
    await expect(page.locator('//div[@class="summary-movies-content"]//h5')).toHaveText('MANDAADI')
    let movieName = await page.locator('//div[@class="summary-movies-content"]//h5').innerText()
    console.log("Movie Name : ", movieName);
    
    await expect(page.locator('.seat-info p')).toContainText(['SILVER', 'H10'])
    let seatInfo = await page.locator('.seat-info p').allInnerTexts()
    console.log("Seat info : ", seatInfo);
    
    const grandTotal = await page.locator('.grand-prices h6').innerText()
    console.log("Grand Total : ", grandTotal);

    const pageTitle = await page.title()
    console.log("Title of the page : ", pageTitle);
    
    

})