const ApiController = require('../controller/ApiController');
const Factory = require('../lib/Factory');

const apiController = new ApiController();
const logger = Factory.getLogger();

const setupRoutes = (app) => {
    app.get('/', async (req,res) => {
        res.sendStatus(501);
    });

    app.get('/api/articles', async (req,res) => {
        try {
            const articles = await apiController.fetchArticles(req);
            res.send(JSON.stringify(articles));
        } catch (e) {
            logger.error("/api/articles failed with " + e.message);
            res.sendStatus(500);
        }
    });

    app.get('/api/resources', async (req,res) => {
        try {
            const resources = await apiController.fetchResources(req);
            res.send(JSON.stringify(resources));
        } catch (e) {
            logger.error("/api/resources failed with " + e.message);
            res.sendStatus(500);
        }
    });
};

module.exports.setupRoutes = setupRoutes;