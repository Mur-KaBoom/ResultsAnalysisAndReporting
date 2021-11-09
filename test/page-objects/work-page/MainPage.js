const Page = require ('../base-page/Page');
const Element = require ('../base-elements/Element');

class MainPage extends Page {

    constructor () {
        super();
        this.confirmRedirectionPopup = new Element ('confirmRedirectionPopup','.modal-dialog.mcd-generic-popup__modal-dialog');
        this.confirmButton = new Element ('confirmButton', '.modal-dialog.mcd-generic-popup__modal-dialog .mcd-generic-popup__button--continue');
    }

}

module.exports = MainPage;