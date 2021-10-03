import Component from "./Component";
import ArticleListElemComponent from "./ArticleListElemComponent";
import Factory from "../Factory";

class ArticleListComponent extends Component{
    constructor(elems) {
        super();
        const list = [];
        const len = Factory.getLang().getLanguage();
        for (let e of elems) {
            list.push(new ArticleListElemComponent(e, list.length === 0, len));
        }
        this.list = list;
    }


    render() {
        let cnt = "";
        for( let e of this.list) {
            cnt += e.render();
        }
        return `<ul id="articles-list">
    ${cnt}
</ul>`
    }
}

export default ArticleListComponent;