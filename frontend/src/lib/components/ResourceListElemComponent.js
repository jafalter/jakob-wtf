import Component from "./Component";

class ResourceListElemComponent extends Component {

    constructor(elem) {
        super();
        this.txt = elem.title;
        this.link = elem.url;
        this.audio = elem.audio;
        this.type = elem.type.value;
        this.author = elem.author;

    }

    render() {
        return `<p class="res-link-wrap"><a class="res-link" href='${this.link}'>${this.txt} - ${this.author}</a>${this.audio !== null ? '<a class="audio-link" href="' + this.audio +'">Audio</a>' : ''}</p>`;
    }
}

export default ResourceListElemComponent;