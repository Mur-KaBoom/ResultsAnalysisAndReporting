const { Then, setDefaultTimeout } = require('cucumber');
const { expect } = require('chai');
const { browser} = require('protractor');
setDefaultTimeout(60000);

Then(/^Page title should be "([^"]*)"$/, async function (expectedResult) {
    expect(await browser.getTitle()).to.be.equal(expectedResult);
});

Then(/^Page url should contain "([^"]*)"$/, async function (expectedResult) {
    expect(await browser.getCurrentUrl()).to.contain(expectedResult);
});