const Articles = require('../model/Article');
const Resource = require('../model/Resource');
const RegionalText = require('../model/RegionalText');
const Text = require('../model/Text');

class ApiController {

    async fetchArticles(req) {
        const articles = await Articles.findAll({
            include: [
                { all: true, nested: true }
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
        const article = await Articles.findOne({where : { keyId : txt.id }});
        if ( article === null ) {
            throw new Error("Nothing found with key " + key);
        }
        return article;
    }
}

module.exports = ApiController;