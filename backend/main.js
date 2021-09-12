
const Factory = require('./lib/Factory');

const Language = require('./persistence/models/Language');
const Category = require('./persistence/models/Category');
const Text = require('./persistence/models/Text');
const Resource = require('./persistence/models/Resource');
const Article = require('./persistence/models/Article');
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

