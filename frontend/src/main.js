/* Polyfills */
import "core-js/stable";
import "regenerator-runtime/runtime";
import 'whatwg-fetch'

import Factory from './lib/Factory';

const api = Factory.getApi();

const renderIndex = async () => {
    console.log("Start");
    const articles = await api.fetchArticles();
    console.log("Found " + articles.length + " articles");
};

renderIndex().then(() => {
    console.log("Rendering successful");
},(e) => {
    console.error("Run into error " + e.message);
});