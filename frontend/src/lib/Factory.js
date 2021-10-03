import Api from "./Api";
import cnf from "../cnf/cnf";
import Lang from "./Lang";

let api = null;
let lang = null;

class Factory {

    static getCnf() {
        return cnf;
    }

    /**
     * @return {Api}
     */
    static getApi() {
        if( api === null ) {
            const cnf = this.getCnf();
            api = new Api(cnf.api.host, cnf.api.key);
        }
        return api;
    }

    /**
     * @return {Lang}
     */
    static getLang() {
        if( lang === null ) {
            lang = new Lang();
        }
        return lang;
    }

}

export default Factory;