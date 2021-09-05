const ApiController = require('../controller/ApiController');
const Factory = require('../lib/Factory');
const Config = require('../lib/Config');

const apiController = new ApiController();
const logger = Factory.getLogger();

const authenticate = (req) => {
    const auth = Config.getAuth();
    return  req.header('Authorization') === auth;
};

const setupRoutes = (app) => {
    app.get('/', async (req,res) => {
        res.sendStatus(501);
    });

    app.get('/api/articles', async (req,res) => {
        try {
            if( !authenticate(req) ) {
                res.sendStatus(401);
            }
            else {
                const articles = await apiController.fetchArticles(req);
                res.send(JSON.stringify(articles));
            }
        } catch (e) {
            logger.error("/api/articles failed with " + e.message);
            res.sendStatus(500);
        }
    });

    app.get('/api/article/:key', async (req,res) => {
        try {
            if( !authenticate(req) ) {
                res.sendStatus(401);
            }
            else {
                const article = await apiController.fetchArticleByKey(req);
                res.send(JSON.stringify(article));
            }
        } catch (e) {
            if( e.message.includes('Nothing found with key') ) {
                logger.warn("No article found with given key! " + e.message);
                res.sendStatus((404));
            }
            else {
                logger.error("/api/article/{key} failed with " + e.message);
                res.sendStatus(500);
            }
        }
    });

    app.get('/api/resources', async (req,res) => {
        try {
            if( !authenticate(req) ) {
                res.sendStatus(401);
            }
            else {
                const resources = await apiController.fetchResources(req);
                res.send(JSON.stringify(resources));
            }
        } catch (e) {
            logger.error("/api/resources failed with " + e.message);
            res.sendStatus(500);
        }
    });
};

module.exports.setupRoutes = setupRoutes;