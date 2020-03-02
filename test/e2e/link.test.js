const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlLinkPage = require('./pages/vl-link.page');

describe('vl-link', async () => {
    const vlLinkPage = new VlLinkPage(driver);

    before(() => {
        return vlLinkPage.load();
    });

    it('Als gebruiker kan ik de tekst van een link zien', async () => {
        const link = await vlLinkPage.getLink();

        await assert.eventually.equal(link.getText(), 'Terug naar overzicht');
    });

    it('Als gebruiker kan ik de tekst van een button gestyled als link zien', async () => {
        const buttonLink = await vlLinkPage.getButtonLink();

        await assert.eventually.equal(buttonLink.getText(), 'Demo link');
    });
});
