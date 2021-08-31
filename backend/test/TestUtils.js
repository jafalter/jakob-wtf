const Language = require('../model/Language');
const Category = require('../model/Category');
const Text = require('../model/Text');
const Resource = require('../model/Resources');
const Article = require('../model/Article');

class TestUtils {

    /**
     *
     * @return {Promise<void>}
     */
    static async insertSeedData() {
        const en = await Language.create({
            id: null,
            value: 'en'
        });
        const de = await Language.create({
            id: null,
            value: 'de'
        });
        const health = await Category.create({
            id: null,
            value: 'health'
        });
        const psychology = await Category.create({
            id: null,
            value: 'psychology'
        });
        const txt = await Text.create({
            id: null,
            value: 'https://www.lynalden.com/bitcoin-energy/'
        });
        const lynbtc = await Resource.create({
            id: null
        });
        await txt.addResource(lynbtc);
        console.log("ah");
    }

}

module.exports = TestUtils;