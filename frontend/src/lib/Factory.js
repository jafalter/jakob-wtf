import Api from "./Api";
import cnf from "../cnf/cnf";

let api = null;

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

}

export default Factory;