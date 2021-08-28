const express = require('express');

const Factory = require('./lib/Factory');
const api = require('./routes/api');

const logger = Factory.getLogger();

const app = express();
const port = 3000;

api.setupRoutes(app);

app.listen(port, () => {
    logger.info("App listening on port: " + port);
});