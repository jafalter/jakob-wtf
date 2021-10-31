import main_styles from './scss/main.scss';

/* Polyfills */
import "core-js/stable";
import "regenerator-runtime/runtime";
import 'whatwg-fetch'


import Factory from './lib/Factory';
import ArticleListComponent from "./lib/components/ArticleListComponent";
import Lang from "./lib/Lang";
import ResourceListComponent from "./lib/components/ResourceListComponent";

const api = Factory.getApi();
const lang = Factory.getLang();

const RESOURCES_EN = "RESOURCES";
const RESOURCES_DE = "RESOURCEN";
const ABOUT_EN = "ABOUT";
const ABOUT_DE = "ÜBER MICH";
const TIP_EN = "SEND SATS";
const TIP_DE = "SPENDE SATS";

const renderIndex = async () => {
    const articles = await api.fetchArticles();
    const articleList = new ArticleListComponent(articles);
    const domContent = document.querySelector('#articles-list');
    domContent.outerHTML = articleList.render();
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
    const resources = await api.fetchResources();
    const domContent = document.querySelector('#resources');
    domContent.innerHTML = new ResourceListComponent(resources).render();
};

const renderDesktopHeader = () => {
    const domDhresources = document.querySelector('#dh-resources');
    const domDhabout = document.querySelector('#dh-about');
    const domDhDE = document.querySelector('#dh-de');
    const domDhEN = document.querySelector('#dh-en');

    const len = lang.getLanguage();
    if( len === 'DE' ) {
        domDhresources.textContent = RESOURCES_DE;
        domDhabout.textContent = ABOUT_DE;
        domDhEN.classList.remove('selected-len');
        domDhDE.classList.add('selected-len');
    }
    else {
        domDhresources.textContent = RESOURCES_EN;
        domDhabout.textContent = ABOUT_EN;
        domDhEN.classList.add('selected-len');
        domDhDE.classList.remove('selected-len');
    }
};

const renderSidePanel = () => {
    const domMbResources = document.querySelector('#mb-resources');
    const domMbAbout = document.querySelector('#mb-about');
    const domMbTip = document.querySelector('#mb-tip');
    const domMbDE = document.querySelector('#mb-de');
    const domMbEN = document.querySelector('#mb-en');

    const len = lang.getLanguage();
    if( len === 'DE' ) {
        domMbResources.textContent = RESOURCES_DE;
        domMbAbout.textContent = ABOUT_DE;
        domMbTip.textContent = TIP_DE;
        domMbEN.classList.remove('selected-len');
        domMbDE.classList.add('selected-len');
    }
    else {
        domMbResources.textContent = RESOURCES_EN;
        domMbAbout.textContent = ABOUT_EN;
        domMbTip.textContent = TIP_EN;
        domMbEN.classList.add('selected-len');
        domMbDE.classList.remove('selected-len');
    }
};

const setupLangChangeListener = (cb) => {
    const domDhEN = document.querySelector('#dh-en');
    const domDhDE = document.querySelector('#dh-de');
    const domMbEN = document.querySelector('#mb-en');
    const domMbDE = document.querySelector('#mb-de');
    domDhEN.addEventListener('click', () => {
        lang.setLanguage('EN');
        cb();
    });
    domDhDE.addEventListener('click', () => {
        lang.setLanguage('DE');
        cb();
    });
    domMbEN.addEventListener('click', () => {
        lang.setLanguage('EN');
        cb();
    });
    domMbDE.addEventListener('click', () => {
        lang.setLanguage('DE');
        cb();
    });
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

const renderPipeLine = async () => {
    renderDesktopHeader();
    renderSidePanel();
    await render();
};

const postRenderActions = () => {
    console.log("Rendering successful");
    const domSidePanelBtn = document.querySelector('#sidepanel-bars-uncollapse');
    const domSidePanel = document.querySelector('#mobile-sidepanel');
    const domArticleCnt = document.querySelector('#article-content');
    const domArticlesLst = document.querySelector('#articles-list');

    domSidePanelBtn.addEventListener('click', () => {
        if( domSidePanel.classList.contains('collapsed') ) {
            domSidePanel.classList.remove('collapsed');
            domSidePanelBtn.classList.add('rotated');
            if( domArticleCnt ) {
                domArticleCnt.classList.add('shrink');
            }
            if( domArticlesLst ) {
                domArticlesLst.classList.add('shrink');
            }

        }
        else {
            domSidePanel.classList.add('collapsed');
            domSidePanelBtn.classList.remove('rotated');
            if( domArticleCnt ) {
                domArticleCnt.classList.remove('shrink');
            }
            if( domArticlesLst ) {
                domArticlesLst.classList.remove('shrink');
            }
        }
    });
};

setupLangChangeListener(() => {
    renderPipeLine().then(() => {
        postRenderActions();
    }, (e) => {
        handleError(e);
    })
});

renderPipeLine().then(() => {
    postRenderActions();
},(e) => {
    handleError(e);
});