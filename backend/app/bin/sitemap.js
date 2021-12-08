const fs = require('fs');
const Factory = require('../lib/Factory');
const Articles = require('../persistence/models/Article');
const logger = Factory.getLogger();

const main = async () => {
    logger.info("Starting to generate sitemaps");
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
    const articles = await Articles.findAll({
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