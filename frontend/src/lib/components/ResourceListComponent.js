import Component from "./Component";
import ResourceListElemComponent from "./ResourceListElemComponent";
import Factory from "../Factory";

class ResourceListComponent extends Component {

    constructor(elems) {
        super();
        this.list = new Map();
        const len = Factory.getLang().getLanguage();
        for( let e of elems ) {
            const key = e.category.value;
            if( !this.list.has(key) ) {
                this.list.set(key, []);
            }
            this.list.get(key).push(new ResourceListElemComponent(e, len));
        }
    }

    render() {
        let cnt = "";
        for ( let key of this.list.keys() ) {
            cnt += "<div id='resource-category'><h1 class='res-hl'><span>" + key + "</span></h1>";
            let elems = this.list.get(key);
            const types = new Map();
            for( let e of elems ) {
                const k = e.type;
                if( !types.has(k) ) {
                    types.set(k, []);
                }
                types.get(k).push(e);
            }
            for( let t of types.keys() ) {
                cnt += "<h2 class='res-h2'><span>" + t + "s:</span></h2>";
                elems = types.get(t);
                for( let e of elems ) {
                    cnt += e.render();
                }
            }
            cnt += '</div>';
        }
        return cnt;
    }
}

export default ResourceListComponent