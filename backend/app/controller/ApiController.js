const Articles = require('../persistence/models/Article');
const Resource = require('../persistence/models/Resource');
const RegionalText = require('../persistence/models/RegionalText');
const Text = require('../persistence/models/Text');

class ApiController {

    async fetchArticles(req) {
        const articles = await Articles.findAll({
            include: [
                { all: true, nested: true }
            ],
            order: [
                ['createdAt', 'DESC']
            ]
        });
        return  articles;
    }

    async fetchResources(req) {
        const resources = await Resource.findAll({
            include: [
                { all: true, nested: true }
            ]
        });
        return resources;
    }

    async fetchArticleByKey(req) {
        const key = req.params.key;
        const rtxt= await RegionalText.findOne({ where : { value : key }});
        if( rtxt === null ) {
            throw new Error("Nothing found with key " + key);
        }
        const txt = await Text.findByPk(rtxt.textId);
        if ( txt === null ) {
            throw new Error("Nothing found with key " + key);
        }
        const article = await Articles.findOne({
            where : {keyId : txt.id},
            include: [
                { all: true, nested: true }
            ]
        });
        if ( article === null ) {
            throw new Error("Nothing found with key " + key);
        }
        return article;
    }
}

module.exports = ApiController;