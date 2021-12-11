const fs = require('fs');

const Factory = require('../lib/Factory');
const Language = require('../persistence/models/Language');
const Category = require('../persistence/models/Category');
const Text = require('../persistence/models/Text');
const RegionalText = require('../persistence/models/RegionalText');
const Resource = require('../persistence/models/Resource');
const Article = require('../persistence/models/Article');
const Visit = require('../persistence/models/Visit');

const logger = Factory.getLogger();
const sequelize = Factory.getORM();

const main = async () => {
    await sequelize.sync();
    logger.info("Starting to generate sitemaps");
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
    const articles = await Article.findAll({
        include: [
            { all: true, nested: true }
        ]
    });
    xml += `<url><loc>https://de.jakob.wtf</loc></url>`;
    xml += `<url><loc>https://en.jakob.wtf</loc></url>`;
    xml += `<url><loc>https://de.jakob.wtf/resources.html</loc></url>`;
    xml += `<url><loc>https://en.jakob.wtf/resources.html</loc></url>`;
    xml += `<url><loc>https://de.jakob.wtf/about.html</loc></url>`;
    xml += `<url><loc>https://en.jakob.wtf/about.html</loc></url>`;
    for(let a of articles) {
        xml += `<url><loc>https://en.jakob.wtf/article/${a.key.regionalText[0].value}</loc></url>`
        xml += `<url><loc>https://de.jakob.wtf/article/${a.key.regionalText[0].value}</loc></url>`
    }
    xml += `</urlset>`;
    fs.writeFileSync('/var/www/sitemap.xml', xml);
};

main().then(() => {
    process.exit();
}, (e) => {
    logger.error(e.message);
    process.exit(-1);
});