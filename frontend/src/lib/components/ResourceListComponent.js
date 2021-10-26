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
            cnt += "<h1 class='res-hl'><span>" + key + "</span></h1>";
            const elems = this.list.get(key);
            for( let e of elems ) {
                cnt += e.render();
            }
        }
        return cnt;
    }
}

export default ResourceListComponent