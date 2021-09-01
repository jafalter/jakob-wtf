const Language = require('../model/Language');
const Category = require('../model/Category');
const Text = require('../model/Text');
const Resource = require('../model/Resource');
const Article = require('../model/Article');
const RegionalText = require('../model/RegionalText');

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
        const economics = await Category.create({
            id: null,
            value: 'health'
        });
        const psychology = await Category.create({
            id: null,
            value: 'psychology'
        });

        // Create a Resources
        const txt = await Text.create({
            id: null
        });
        await RegionalText.create({
            id: null,
            value: 'Bitcoin’s Energy Usage Isn’t a Problem. Here’s Why.',
            textId: txt.id,
            languageId: en.id
        });
        await RegionalText.create({
            id: null,
            value: 'Der Energieverbrauch von Bitcoin ist kein Problem. Hier ist der Grund.',
            textId: txt.id,
            languageId: de.id
        });
        await Resource.create({
            id: null,
            url: 'https://www.lynalden.com/bitcoin-energy/',
            categoryId: economics.id,
            titleId: txt.id
        });

        // Create a Article
        const title = await Text.create({
            id: null
        });
        const subtext = await Text.create({
            id: null
        });
        const key = await Text.create({
            id: null
        });
        await RegionalText.create({
            id: null,
            value: 'The Weston Price Study',
            textId: title.id,
            languageId: en.id
        });
        await RegionalText.create({
            id: null,
            value: 'Die Weston Price Studie',
            textId: title.id,
            languageId: de.id
        });
        await RegionalText.create({
            id: null,
            value: 'In this article I discuss the Weston Price Study',
            textId: subtext.id,
            languageId: en.id
        });
        await RegionalText.create({
            id: null,
            value: 'In diesem Arikel diskutiere ich die Weston Price Studie',
            textId: subtext.id,
            languageId: de.id
        });
        await RegionalText.create({
            id: null,
            value: 'TheWestonPriceStudy',
            textId: key.id,
            languageId: en.id
        });
        await RegionalText.create({
            id: null,
            value: 'DieWestonPriceStudie',
            textId: key.id,
            languageId: de.id
        });
        await Article.create({
            id: null,
            image: 'price.jpg',
            file: 'price.html',
            categoryId: health.id,
            titleId: title.id,
            subtextId: subtext.id,
            keyId: key.id
        });
        console.log("hi");
    }

}

module.exports = TestUtils;