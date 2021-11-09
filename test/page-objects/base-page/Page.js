const Footer = require ("./Footer");
const Element = require ("../base-elements/Element");
const { browser } = require("protractor");


class Page {
    constructor () {
        this.footer = new Footer();
        this.closeCookieAgreementButton = new Element ('Close Cookie Agreement Button', '.hide-small .banner-close-button')
    }

    async getCurrentUrl () {
        return browser.getCurrentUrl();
    }

    async getTitle () {
        return browser.getTitle();
    }  
}

module.exports = Page;