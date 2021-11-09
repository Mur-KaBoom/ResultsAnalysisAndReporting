const Collection = require('../base-elements/Collection');

class Footer {
    constructor () {
        this.socialMediaLinks = new Collection ('Social Media Links','.footer-social-link');
    }
}

module.exports = Footer;