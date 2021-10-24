import main_styles from './scss/main.scss';

/* Polyfills */
import "core-js/stable";
import "regenerator-runtime/runtime";
import 'whatwg-fetch'


import Factory from './lib/Factory';
import ArticleListComponent from "./lib/components/ArticleListComponent";
import Lang from "./lib/Lang";

const api = Factory.getApi();
const lang = Factory.getLang();

const renderIndex = async () => {
    const articles = await api.fetchArticles();
    const articleList = new ArticleListComponent(articles);
    const domContent = document.querySelector('#content');
    domContent.innerHTML =  domContent.innerHTML + articleList.render();
};

const renderArticle = async () => {
    const split = window.location.href.split('/');
    const lastElem = split[split.length-1];
    const secLastElem = split[split.length-2];
    const key = ["EN", "DE"].includes(lastElem.toUpperCase()) ? secLastElem : lastElem;
    const ln = lang.getLanguage();
    api.fetchArticleContent(key, ln).then((cnt) => {
        const domContent = document.querySelector('#article-txt');
        cnt = cnt.replaceAll(':assets:', Factory.getAssetsUrl());
        domContent.innerHTML = cnt;
    }, (e) => {
        handleError(e);
    });
    api.fetchArticleDetails(key).then((details) => {
        const date = new Date(details.createdAt);
        let title = "";
        for(let t of details.title.regionalText) {
            console.log(t.language.value);
            if( t.language.value === lang.getLanguage() ) {
                title = t.value;
            }
        }
        console.log(details);
        const domHl = document.querySelector('#article-hl');
        domHl.innerHTML = title;
        const domDate = document.querySelector('#article-date');
        const domImg = document.querySelector('#article-img');
        domImg.innerHTML = `<img class="article-img" src="${Factory.getAssetsUrl() + details.image}"  alt="Picture of a traditional scotish family"/>`;
        domDate.innerHTML = date.toLocaleDateString(lang.getLanguage() === 'EN' ? "en-US" : 'de-DE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }, (e) => {
        handleError(e);
    })
};

const renderResources = async () => {

};

const renderAbout = async () => {

};

const handleError = (e) => {
    console.error(e);
};


// Render function based on current page
let render = renderIndex;

if( window.location.href.includes('article') ) {
    render = renderArticle;
}
else if( window.location.href.includes('resources') ) {
    render = renderResources;
}
else if( window.location.href.includes('about') ) {
    render = renderAbout;
}
render().then(() => {
    console.log("Rendering successful");
    const domSidePanelBtn = document.querySelector('#sidepanel-bars-uncollapse');
    const sidePanel = document.querySelector('#mobile-sidepanel');

    domSidePanelBtn.addEventListener('click', () => {
        if( sidePanel.classList.contains('collapsed') ) {
            sidePanel.classList.remove('collapsed');
            domSidePanelBtn.classList.add('rotated');
        }
        else {
            sidePanel.classList.add('collapsed');
            domSidePanelBtn.classList.remove('rotated')
        }
    });
},(e) => {
    console.error("Run into error " + e.message);
});