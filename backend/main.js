
const Factory = require('./lib/Factory');

const Language = require('./model/Language');
const Category = require('./model/Category');
const Text = require('./model/Text');
const Resource = require('./model/Resource');
const Article = require('./model/Article');
const app = require('./app');

const logger = Factory.getLogger();
const sequelize = Factory.getORM();

const main = async () => {
    logger.info("Application startup process...");
    await sequelize.sync();
};

main().then(() => {
    logger.info("Application started successfully");
}, (e) => {
    logger.error("Startup exited with error " + e.message);
});

