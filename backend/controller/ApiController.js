const Articles = require('../model/Article');
const Resource = require('../model/Resource');

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
}

module.exports = ApiController;