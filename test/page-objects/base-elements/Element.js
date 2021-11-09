const { browser } = require("protractor");

class Element {

    constructor (elementName,selector) {
        this.element = element(by.css(selector));
        this.elementName = elementName;
    }

    async click () {
        await this.element.click();
    }

    waitForElement () {
        return browser.wait(ExpectedConditions.presenceOf(this.element), 30000);
    }

    elementIsDisplayed () {
        return this.element.isDisplayed();
    }

    getText () {
        return this.element.getText();
    }
}

module.exports = Element;