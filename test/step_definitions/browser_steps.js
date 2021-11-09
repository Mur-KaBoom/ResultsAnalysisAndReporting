const { When, setDefaultTimeout } = require('cucumber');
const { browser} = require('protractor');
setDefaultTimeout(60000);

When(/^I open stupid McDonalds web page$/, async function () {
    await  browser.get('https://www.mcdonalds.com/us/en-us.html');
});

When (/^I scroll to bottom$/, async function () {
    await browser.executeScript('window.scrollTo(0, document.body.scrollHeight)');
});

When (/^I switch to the next tab$/, async function () {
    const handles = await browser.getAllWindowHandles();
    await browser.switchTo().window(handles[1]);
});

When (/^I switch to the original tab$/, async function () {
    const handles = await browser.getAllWindowHandles();
    await browser.executeScript('window.close();');
    await browser.driver.switchTo().window(handles[0]);
    browser.ignoreSynchronization = false;
});

When (/^I disable protractor sync$/, async function () {
    browser.ignoreSynchronization = true;
});
        