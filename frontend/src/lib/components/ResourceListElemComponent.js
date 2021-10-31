import Component from "./Component";

class ResourceListElemComponent extends Component {

    constructor(elem) {
        super();
        this.txt = elem.title;
        this.link = elem.url;
        this.audio = elem.audio;

    }

    render() {
        return `<a class="res-link" href='${this.link}'>${this.txt}</a>${this.audio !== null ? '<a class="audio-link" href="' + this.audio +'">Audio</a>' : ''}`;
    }
}

export default ResourceListElemComponent;