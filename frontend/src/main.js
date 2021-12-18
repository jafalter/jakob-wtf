import main_styles from './scss/main.scss';

/* Polyfills */
import "core-js/stable";
import "regenerator-runtime/runtime";
import 'whatwg-fetch'

import Factory from './lib/Factory';
import ArticleListComponent from "./lib/components/ArticleListComponent";
import ResourceListComponent from "./lib/components/ResourceListComponent";
import ReadingState from "./lib/ReadingState";
import Lang from "./lib/Lang";

const api = Factory.getApi();
const lang = Factory.getLang();

const RESOURCES_EN = "RESOURCES";
const RESOURCES_DE = "RESOURCEN";
const ABOUT_EN = "ABOUT";
const ABOUT_DE = "ÜBERMICH";
const TIP_EN = "TIP";
const TIP_DE = "TIP";
const SHARE_EN = "SHARE";
const SHARE_DE = "TEILEN";

const TIME_LEFT_DE = "verb.";
const TIME_LEFT_EN = "left";
const POS_SAVE_EN = "- pos. saved...";
const POS_SAVE_DE = "- Pos. gesp...";

const AUTHOR_TXT_EN = "by";
const AUTHOR_TXT_DE = "von";

let readingState = null;

const renderIndex = async () => {
    const articles = await api.fetchArticles();
    const articleList = new ArticleListComponent(articles);
    const domContent = document.querySelector('#articles-list');
    domContent.outerHTML = articleList.render();
};

const renderArticle = async () => {
    const split = window.location.pathname.split('/');
    const domPercentage = document.querySelector('#percentage');
    const domTimeLeft = document.querySelector('#time-left');
    const domReadingInfo = document.querySelector('#reading-info');
    const domReadingLeft = document.querySelector('#reading-left');
    const domProgress = document.querySelector('#progress');
    const domAuthor = document.querySelector('#author');
    const domFrom = document.querySelector('#from-author');
    const domContent = document.querySelector('#article-txt');
    const domShareBtn = document.querySelector('#share-btn');
    const key = split[split.length-1];
    let cnt = null;
    const ln = lang.getLanguage();
    let imagesCount = 0;
    let imagesLoaded = 0;

    window.imgCallback = () => {
        imagesLoaded++;
        const allImagesLoaded = imagesLoaded === imagesCount;
        if(allImagesLoaded) {
            console.log("Initializing Reading State");
            // We can initialize the Reading State
            const max = domContent.offsetHeight;
            readingState = new ReadingState(key, max, cnt.split(' ').length);
            domReadingLeft.textContent = lang.getLanguage() === 'DE' ? TIME_LEFT_DE : TIME_LEFT_EN;
            const lastPos = readingState.position;
            if( lastPos > 0 ) {
                window.scrollTo({top : lastPos});
            }
            const onScroll = () => {
                const position = window.pageYOffset;
                readingState.updatePosition(position);
                domPercentage.innerText = readingState.getPercentage();
                domTimeLeft.innerText = readingState.getRemainingTime();
                if( readingState.isAtEnd() && !domProgress.classList.contains('collapsed') ) {
                    domProgress.classList.add('collapsed');
                }
                else if( !readingState.isAtEnd() && domProgress.classList.contains('collapsed') ) {
                    domProgress.classList.remove('collapsed');
                }
            };
            window.addEventListener('scroll', () => {
                onScroll();
            });
            window.addEventListener('touchmove', () => {
                onScroll();
            });
            window.setInterval(() => {
                readingState.savePosition();
                domReadingInfo.textContent = lang.getLanguage() === 'DE' ? POS_SAVE_DE : POS_SAVE_EN;
                setTimeout(() => {
                    domReadingInfo.textContent = "";
                }, 5000);
            }, 10000);
        }
    };

    try {
        cnt = await api.fetchArticleContent(key, ln);
        const details = await api.fetchArticleDetails(key);
        cnt = cnt.replaceAll(':assets:', Factory.getAssetsUrl());
        imagesCount = (cnt.match(/<img/g) || []).length;
        domContent.innerHTML = cnt;
        domAuthor.innerHTML = details.author;
        const date = new Date(details.createdAt);
        let description = "";
        let title = "";
        for(let t of details.title.regionalText) {
            if( t.language.value === lang.getLanguage() ) {
                title = t.value;
            }
        }
        for(let t of details.subtext.regionalText) {
            if( t.language.value === lang.getLanguage() ) {
                description = t.value;
            }
        }
        const domHl = document.querySelector('#article-hl');
        domHl.innerHTML = title;
        const domDate = document.querySelector('#article-date');
        const domImg = document.querySelector('#article-img');
        domFrom.innerHTML = lang.getLanguage() === 'EN' ? AUTHOR_TXT_EN : AUTHOR_TXT_DE;

        // Set Meta tags freshly
        const metaImg = Factory.getAssetsUrl() + details.image;
        const metaTitle = "JAKOB.WTF - " + title;
        const metaDesc = description;
        const metaUrl = "https://jakob.wtf/" + window.location.pathname;

        domImg.innerHTML = `<img class="article-img" src="${metaImg}"  alt="Article title picture"/>`;
        domDate.innerHTML = date.toLocaleDateString(lang.getLanguage() === 'EN' ? "en-US" : 'de-DE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        domShareBtn.classList.remove('hidden');
        domShareBtn.addEventListener('click', () => {
            if(navigator.share) {
                navigator.share({
                    title : metaTitle,
                    url : metaUrl,
                    text : metaDesc
                }).catch(console.error)
            }
            else {
                const txt = lang.getLanguage() === 'DE' ? "Ihr Browser unterstützt diese Funktion nicht! Bitte teilen sie die Seiten manuell." : "Direct share not supported on your browser, please copy the page URL manually.";
                alert(txt);
            }
        });
    } catch (e) {
        handleError(e);
    }
};

const renderResources = async () => {
    const resources = await api.fetchResources();
    const domContent = document.querySelector('#resources');
    domContent.innerHTML = new ResourceListComponent(resources).render();
};

const renderAbout = async () => {
    const domJakobImg = document.querySelector('#jakob');
    const domAboutDe = document.querySelector('#about-me-txt-de');
    const domAboutEn = document.querySelector('#about-me-txt-en');
    if (lang.getLanguage() === 'DE') {
        domAboutDe.classList.remove('collapsed');
    }
    else {
        domAboutEn.classList.remove('collapsed');
    }
    domJakobImg.setAttribute('src', Factory.getAssetsUrl() + 'jakob.jpg');
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

const switchToEnglish = (isDev) => {
    if( isDev )  {
        localStorage.setItem('lang', 'EN');
        window.location.reload();
    }
    else {
        window.location.href = window.location.href.replace('de', 'en');
    }
};

const switchToGerman = (isDev) => {
    if( isDev )  {
        localStorage.setItem('lang', 'DE');
        window.location.reload();
    }
    else {
        window.location.href = window.location.href.replace('en', 'de');
    }
};

const setupLangChangeListener = () => {
    const isDev = window.location.hostname === 'localhost';
    const domDhEN = document.querySelector('#dh-en');
    const domDhDE = document.querySelector('#dh-de');
    const domMbEN = document.querySelector('#mb-en');
    const domMbDE = document.querySelector('#mb-de');
    domDhEN.addEventListener('click', () => switchToEnglish(isDev));
    domDhDE.addEventListener('click', () => switchToGerman(isDev));
    domMbEN.addEventListener('click', () => switchToEnglish(isDev));
    domMbDE.addEventListener('click', () => switchToGerman(isDev));
};

const handleError = (e) => {
    console.error(e);
    const domContent = document.querySelector('#content');
    domContent.classList.add('error');
    domContent.innerHTML = "An unexpected error has happened!";
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
    setupLangChangeListener();
    renderDesktopHeader();
    renderSidePanel();
    api.sendVisit();
    await render();
};

const postRenderActions = () => {
    console.log("Rendering successful");
    const domSidePanelBtn = document.querySelector('#sidepanel-bars-uncollapse');
    const domSidePanel = document.querySelector('#mobile-sidepanel');
    const domArticleCnt = document.querySelector('#article-content');
    const domArticlesLst = document.querySelector('#articles-list');
    const domResources = document.querySelector('#resources');
    const domAboutme = document.querySelector('#about-me');

    // Sidepanel open and close
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
            if( domResources ) {
                domResources.classList.add('shrink');
            }
            if( domAboutme ) {
                domAboutme.classList.add('shrink');
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
            if( domResources ) {
                domResources.classList.remove('shrink');
            }
            if( domAboutme ) {
                domAboutme.classList.remove('shrink');
            }
        }
    });
};

renderPipeLine().then(() => {
    postRenderActions();
},(e) => {
    handleError(e);
});