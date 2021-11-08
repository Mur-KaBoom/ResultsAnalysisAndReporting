const { Then, setDefaultTimeout } = require('cucumber');
const { expect } = require('chai');
const { browser} = require('protractor');
setDefaultTimeout(60000);

Then(/^Page title should be "([^"]*)"$/, async function (expectedPageTitle) {
    expect(await browser.getTitle()).to.be.equal(expectedPageTitle);
});

Then(/^Page url should be "([^"]*)"$/, async function (expectedPageUrl) {
    expect(await browser.getCurrentUrl()).to.be.equal(expectedPageUrl);
});