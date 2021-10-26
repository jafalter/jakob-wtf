import Component from "./Component";
import Util from "../Util";
import Factory from "../Factory";

class ArticleListElemComponent extends Component {

    constructor(e, isFirst, len) {
        super();
        this.first = isFirst;
        this.img = Factory.getAssetsUrl() + e.image;
        const titles = e.title.regionalText;
        const subtxts = e.subtext.regionalText;
        this.key = e.key.regionalText[0].value;
        this.link = '/article/' + this.key;
        const created = new Date(e.createdAt);
        const today = new Date();
        this.days = Util.getDaysBetween(today, created);
        if( this.days > 365 ) {
            this.years = Math.floor(this.days / 365);
            this.days = this.days - (this.years * 365);
        }

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
        return `<a href="${this.link}"><li class="article-list-elem ${this.first ? '' : 'notfirst-elem'}">
<div class="article-list-elem-thumbnail ${this.first ? '' : 'notfirst-thumbnail'}">
    <img class="article-list-elem-img rounded ${this.first ? '' : 'notfirst-img'}" src="${this.img}" alt="${this.title}" />
</div>
<div class="article-list-elem-txt ${this.first ? '' : 'notfirst-txt'}">
    <h1 class="article-list-elem-title ${this.first ? '' : 'notfirst-title'}">${this.title}</h1>
    <p class="article-list-elem-time">${this.years ? this.years + "y " + this.days : this.days}d ago</p>
    <p class="article-list-elem-subtxt ${this.first ? '' : 'notfirst-subtxt'}">${this.subtxt}</p>
    ${ this.first ? '<button class="article-list-elem-btn">READ</button>' : ''}
</div>
</li></a>`;
    }
}

export default ArticleListElemComponent;