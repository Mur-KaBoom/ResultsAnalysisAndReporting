const { When, setDefaultTimeout } = require('cucumber');
const MainPage = require('../page-objects/work-page/MainPage');
const mainPage = new MainPage ();
setDefaultTimeout(60000);

When (/^I click "(#([^"]*) of )?([^"]*)"$/, async function (elementOrder,elementToClick) {
    if (elementOrder) {
        await mainPage.footer[elementToClick].clickElementByNumber(elementOrder);
    } else {
        await mainPage[elementToClick].click();
    }
});

When (/^I wait until "([^"]*)"( in footer)? is displayed$/, async function (elementToBeDisplayed,footerArg) {
    if(footerArg){
        await mainPage.footer[elementToBeDisplayed].waitForElement();
    } else {
        await mainPage[elementToBeDisplayed].waitForElement();
    }
});