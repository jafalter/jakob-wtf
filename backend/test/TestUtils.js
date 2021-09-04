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
        const r1 = await RegionalText.create({
            id: null,
            value: 'Bitcoin’s Energy Usage Isn’t a Problem. Here’s Why.',
        });
        r1.setText(txt);
        r1.setLanguage(en);
        await r1.save();

        const r2 = await RegionalText.create({
            id: null,
            value: 'Der Energieverbrauch von Bitcoin ist kein Problem. Hier ist der Grund.',
        });
        r2.setText(txt);
        r2.setLanguage(de);
        await r2.save();

        const r = await Resource.create({
            id: null,
            url: 'https://www.lynalden.com/bitcoin-energy/'
        });
        r.setCategory(economics);
        r.setTitle(txt);
        await r.save();

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
        const r4 = await RegionalText.create({
            id: null,
            value: 'The Weston Price Study',
        });
        r4.setText(title);
        r4.setLanguage(en);
        await r4.save();

        const r5 = await RegionalText.create({
            id: null,
            value: 'Die Weston Price Studie',
        });
        r5.setText(title);
        r5.setLanguage(de);
        await r5.save();

        const r6 = await RegionalText.create({
            id: null,
            value: 'In this article I discuss the Weston Price Study',
        });
        r6.setText(subtext);
        r6.setLanguage(en);
        await r6.save();

        const r7 = await RegionalText.create({
            id: null,
            value: 'In diesem Arikel diskutiere ich die Weston Price Studie',
        });
        r7.setText(subtext);
        r7.setLanguage(de);
        await r7.save();

        const r8 = await RegionalText.create({
            id: null,
            value: 'TheWestonPriceStudy',
        });
        r8.setText(key);
        r8.setLanguage(en);
        await r8.save();

        const r9 = await RegionalText.create({
            id: null,
            value: 'DieWestonPriceStudie',
        });
        r9.setText(key);
        r9.setLanguage(de);
        await r9.save();

        const a = await Article.create({
            id: null,
            image: 'price.jpg',
            file: 'price.html',
        });
        a.setCategory(health);
        a.setTitle(title);
        a.setSubtext(subtext);
        a.setKey(key);
        await a.save();
    }

}

module.exports = TestUtils;