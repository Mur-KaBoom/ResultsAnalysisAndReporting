'use strict'
const {After, Status, setDefaultTimeout} = require('cucumber');
const { browser } = require('protractor');
setDefaultTimeout(60*1000);

After(async function (test) {
    if(test.result.status === Status.FAILED) {
        const screenshot = await browser.takeScreenshot();
        const decodedImage = new Buffer (screenshot, 'base64');
        await this.attach(decodedImage, 'image/png');
    }
});
