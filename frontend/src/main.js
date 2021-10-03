import main_styles from './scss/main.scss';

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

const renderArticle = async () => {
    const split = window.location.href.split('/');
    const key = split[split.length-1];
    console.log("Rendering article " + key);
}

// Render function based on current page
let render = renderIndex;

if( window.location.href.includes('article') ) {
    render = renderArticle;
}
render().then(() => {
    console.log("Rendering successful");
},(e) => {
    console.error("Run into error " + e.message);
});