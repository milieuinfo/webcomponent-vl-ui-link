const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlLinkPage = require('./pages/vl-link.page');

describe('vl-link', async () => {
    const vlLinkPage = new VlLinkPage(driver);

    before(() => {
        return vlLinkPage.load();
    });

    it('Als gebruiker kan ik een icoon bij de link zien', async () => {
        const link = await vlLinkPage.getLinkWithIcon();

        const icons = await link.getIcons();
        await assert.lengthOf(icons, 1);
        await assert.eventually.equal(icons[0].getType(), 'arrow-right-fat');
    });

    it('Als gebruiker kan ik een button gestyled als link zien, inclusief icoon', async () => {
        const buttonLink = await vlLinkPage.getButtonLink();

        const icons = await buttonLink.getIcons();
        await assert.lengthOf(icons, 1);
        await assert.eventually.equal(icons[0].getType(), 'arrow-right-fat');
    });
});
