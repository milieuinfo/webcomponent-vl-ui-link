const { VlElement } = require('vl-ui-core').Test;
const { By } = require('vl-ui-core').Test.Setup;
const { VlIcon } = require('vl-ui-icon').Test;

class VlLink extends VlElement {
    async getIcons() {
        const icons = await this.findElements(By.css('[is="vl-icon"]'));
        return Promise.all(icons.map(icon => new VlIcon(this.driver, icon)));
    }
}

class VlButtonLink extends VlLink { }

module.exports = { VlLink, VlButtonLink };
