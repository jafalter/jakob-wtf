const setupRoutes = (app) => {
    app.get('/', (req,res) => {
        res.sendStatus(501);
    })
};

module.exports.setupRoutes = setupRoutes;