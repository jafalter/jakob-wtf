import Component from "./Component";

class ResourceListElemComponent extends Component {

    constructor(elem, len) {
        super();
        console.log(elem);
        let txt = "";
        for( let t of elem.title.regionalText ) {
            if ( t.language.value === len ) {
                txt = t.value;
            }
        }
        this.txt = txt;
        this.link = elem.url;
    }

    render() {
        return `<a class="res-link" href='${this.link}'>${this.txt}</a>`;
    }
}

export default ResourceListElemComponent;