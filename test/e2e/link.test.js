const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlLinkPage = require('./pages/vl-link.page');

describe('vl-link', async () => {
    const vlLinkPage = new VlLinkPage(driver);

    before(() => {
        return vlLinkPage.load();
    });

    it("Dummy test om de browsers te laten sluiten", () => {
    });
});
