const {VlElement} = require('vl-ui-core').Test;

class VlLink extends VlElement {
  async getText() {
    const text = super.getText();
    return text.trim();
  }
}

class VlButtonLink extends VlLink { }

module.exports = {VlLink, VlButtonLink};
