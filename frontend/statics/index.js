const express = require('express');
const app = express();
const port = 8080;

app.use(express.static(__dirname + '/assets'));

app.listen(port, () => {
    console.log("Statics server running on " + port);
});