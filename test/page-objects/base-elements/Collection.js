const { browser, $ } = require("protractor");


class Collection {

    constructor (collectionName,selector) {
        this.collection = element.all(by.css(selector));
        this.collectionName = collectionName;
        this.collectionSelector = selector.slice(1);
    }

    async getCount () {
        return this.collection.count();
    }

    async getText () {
        return this.collection.getText();
    }

    waitForElement () {
        return browser.wait(ExpectedConditions.presenceOf(this.collection), 30000);
    }

    async clickElementByNumber (numberToClick) {
        const collectionCount = this.collection.count();
        if (numberToClick <= collectionCount && numberToClick >= 0) {
            return browser.executeScript(`document.getElementsByClassName("${this.collectionSelector}")[${numberToClick}].click()`);
        } else {
            throw new Error (`${numberToClick} is out of array boundaries`)
        }
    }
}

module.exports = Collection;