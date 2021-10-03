import Component from "./Component";
import Util from "../Util";

class ArticleListElemComponent extends Component {

    constructor(e, isFirst, len) {
        super();
        this.first = isFirst;
        const img = this.first ? 'large_' + e.image : e.image;
        //this.img = import('../../resources/' + img);
        const titles = e.title.regionalText;
        const subtxts = e.subtext.regionalText;
        this.key = e.key.regionalText[0].value;
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
        return `<li class="article-list-elem ${ this.first ? 'first-elem' : ''}">
    <img class="article-list-elem-img ${ this.first ? 'first-elem' : ''}" src="${this.img}" alt="${this.title}" />
    <h1 class="articles-list-elem-title">${this.title}</h1>
    <p class="article-list-elem-time">${this.days}d ago</p>
    <p class="article-list-elem-subtxt">${this.subtxt}</p>
    ${ this.first ? '<button class="article-list-elem-btn">READ</button>' : ''}
</li>`;
    }
}

export default ArticleListElemComponent;