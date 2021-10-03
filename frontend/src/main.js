import main_styles from './scss/main.scss';

/* Polyfills */
import "core-js/stable";
import "regenerator-runtime/runtime";
import 'whatwg-fetch'


import Factory from './lib/Factory';
import ArticleListComponent from "./lib/components/ArticleListComponent";

const api = Factory.getApi();
const lang = Factory.getLang();

const renderIndex = async () => {
    console.log("Start");
    const articles = await api.fetchArticles();
    console.log("Found " + articles.length + " articles");
    const articleList = new ArticleListComponent(articles);
    const domContent = document.querySelector('#content');
    domContent.innerHTML = articleList.render();
};

const renderArticle = async () => {
    const split = window.location.href.split('/');
    const lastElem = split[split.length-1];
    const secLastElem = split[split.length-2];
    const key = ["EN", "DE"].includes(lastElem.toUpperCase()) ? secLastElem : lastElem;
    const ln = lang.getLanguage();
    console.log("Rendering article " + key);
    api.fetchArticleContent(key, ln).then((cnt) => {
        const domContent = document.querySelector('#content');
        domContent.innerHTML = cnt;
    }, (e) => {
        handleError(e);
    })
}

const handleError = (e) => {
    console.error(e);
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