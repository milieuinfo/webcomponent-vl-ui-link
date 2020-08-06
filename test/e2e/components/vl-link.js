const {VlElement} = require('vl-ui-core').Test;

class VlLink extends VlElement {
  async isBlock() {
    return this.hasAttribute('block');
  }
}

class VlButtonLink extends VlLink { }

module.exports = {VlLink, VlButtonLink};
