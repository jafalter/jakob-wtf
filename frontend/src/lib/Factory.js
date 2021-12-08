import Api from "./Api";
import cnf from "../cnf/cnf";
import prodCnf from "../cnf/cnf-prod.json";
import Lang from "./Lang";

let api = null;
let lang = null;

class Factory {

    static getCnf() {
        if(Factory.isProd()) {
            return prodCnf
        }
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
     * @return {string}
     */
    static getAssetsUrl() {
        return this.getCnf().assets.url + "/";
    }

    /**
     *
     * @return {boolean}
     */
    static isProd() {
        return process.env.NODE_ENV === 'production';
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