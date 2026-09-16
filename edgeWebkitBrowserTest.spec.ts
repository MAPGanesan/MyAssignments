import { test, chromium, webkit } from "@playwright/test";

test('Launch Red Bus site through Edge browser', async () => {
    const edgeBrowser = await chromium.launch({ channel: 'msedge', headless: false })
    const edgeBrowserPage = await edgeBrowser.newPage()
    await edgeBrowserPage.goto("https://www.redbus.in")
    console.log('Title of Red Bus site shown in Edge Browser is : ', await edgeBrowserPage.title());
    console.log('Current URL of the Red Bus site shown in Edge Browser is : ', edgeBrowserPage.url());
})

test('Launch Flipkart site through Webkit browser', async () => {
    const webkitBrowser = await webkit.launch({ channel: 'webkit', headless: false })
    const webkitBrowserPage = await webkitBrowser.newPage()
    await webkitBrowserPage.goto('https://www.flipkart.com')
    console.log('Title of Red Bus site shown in Webkit Browser is : ', await webkitBrowserPage.title())
    console.log('Current URL of the Flipkart site shown in Webkit Browser is : ', webkitBrowserPage.url());
})