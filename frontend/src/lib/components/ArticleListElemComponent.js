import Component from "./Component";
import Util from "../Util";
import Factory from "../Factory";

class ArticleListElemComponent extends Component {

    constructor(e, isFirst, len) {
        super();
        this.first = isFirst;
        this.img = Factory.getAssetsUrl() + e.image;
        this.limg = Factory.getAssetsUrl() + "large" + e.image;
        const titles = e.title.regionalText;
        const subtxts = e.subtext.regionalText;
        this.key = e.key.regionalText[0].value;
        this.link = '/article/' + this.key;
        const created = new Date(e.createdAt);
        const today = new Date();
        this.days = Util.getDaysBetween(today, created);

        for(let t of titles) {
            if( t.language.value === len ) {
                this.title = t.value;
            }
        }
        for(let s of subtxts) {
            if( s.language.value === len ) {
                this.subtxt = s.value;
            }
        }
    }


    render() {
        return `<li class="article-list-elem ${this.first ? '' : 'notfirst-elem'}">
<div class="article-list-elem-thumbnail ${this.first ? '' : 'notfirst-thumbnail'}">
    <a class="article-list-elem-link" href="${this.link}"><img class="article-list-elem-img rounded ${this.first ? '' : 'notfirst-img'}" src="${this.limg}" alt="${this.title}" /></a>
</div>
<div class="article-list-elem-txt ${this.first ? '' : 'notfirst-txt'}">
    <a href="${this.link}"><h1 class="articles-list-elem-title ${this.first ? '' : 'notfirst-title'}">${this.title}</h1></a>
    <p class="article-list-elem-time">${this.days}d ago</p>
    <p class="article-list-elem-subtxt ${this.first ? '' : 'notfirst-subtxt'}">${this.subtxt}</p>
    ${ this.first ? '<a href="'+ this.link +'"><button class="article-list-elem-btn">READ</button></a>' : ''}
</div>
</li>`;
    }
}

export default ArticleListElemComponent;