/* 1. Launch the browser.
2. Navigate to https://www.decathlon.in/.
3. Verify the user is navigated to the Decathlon home page.
4. Click on the Search icon on the home page.
5. Verify the search input field is enabled.
6. Enter the product name as "shoes" in the search field.
7. Press Enter to search the product.
8. Capture and print the page title in the console.
9. Verify the page title is displayed as "Search | shoes".
10. Click on the "Running" category filter.
11. Click on the "Men" gender filter.
12. Click on the shoe size filter "UK 10.5".
13. Click on the "Most relevant" sorting dropdown.
14. Select "Price: Low to High" from the sorting options.
15. Click on the first product from the displayed product list.
16. Select the shoe size "UK 10.5 - EU 45" on the product detail page.
17. Click on the "Add to Cart" button.
18. Click on the Cart option.
19. Fetch the total cart value.
20. Print the total cart amount in the console. */

import {expect, test} from "@playwright/test"

test('Decathlon - Add Product to Cart', async ({page}) => {
    await page.goto('https://www.decathlon.in')

    await expect(page).toHaveURL('https://www.decathlon.in/')
    await expect(page).toHaveTitle(/Buy Sporting Goods/)
    await expect(page.locator('span:has-text("All Sports")')).toBeVisible()
    console.log("User is on Decathlon Home page");
    
    /* const searchBox = page.locator('//input[@type="search"]')
    await expect(searchBox).toBeEnabled()
    await expect(searchBox).toBeEditable()
    await searchBox.fill('Shoes')
    await page.keyboard.press('Enter') */

    const searchBox = page.locator('[type="search"]')
    await searchBox.click()
    await expect(searchBox).toBeEnabled()
    await expect(searchBox).toBeEditable()
    await searchBox.fill('Shoes')
    await page.keyboard.press('Enter')
    
    await expect(page).toHaveTitle(/Search | Shoes/)
    //await page.locator('//button[.//span[text()="Sport"]]').click()
    //await page.locator('button:hasText("Sport")')
    await page.locator('//button[.//span[text()="Sport"]]').click()
    await page.locator('//label[.//span[text()="Running"]]').click()
    await expect(page.locator('//label[.//span[text()="Running"]]')).toBeChecked()
    await page.locator('//button[.//span[text()="Sport"]]').click()

    await page.locator('//button[.//span[text()="Gender"]]').click()
    await page.locator('//label[.//span[text()="Men"]]').click()
    await expect(page.locator('//label[.//span[text()="Men"]]')).toBeChecked()
    await page.locator('//button[.//span[text()="Gender"]]').click()

    await page.locator('//button[.//span[text()="Size"]]').click()
    await page.locator('//label[.//span[text()="10.5"]]').click()
    await expect(page.locator('//label[.//span[text()="10.5"]]')).toBeChecked()
    await page.locator('//button[.//span[text()="Size"]]').click()

    await page.locator('//button[.//span[text()="Most relevant"]]').click()
    await page.getByRole('option', {name:'Price (low → high)'}).click()

    await page.locator('(//a[@data-test-id="product-card-link"])[1]').click()
    await page.locator('//button[.//span[text()="10.5"]]').click()
    //await expect(page.locator('//button[.//span[text()="10.5"]]')).toBeChecked()
    await page.locator('//button[.//span[text()="Add to cart"]]').click()

    await page.locator('[aria-label="Cart"]').click()

    const totalAmount = await page.locator('[data-test-id="cart:cart-checkout-total-cart-value"] p').innerText()
    console.log('Total Cart Amount is :',totalAmount);
    
    
})