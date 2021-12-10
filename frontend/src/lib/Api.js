import {fetch} from "whatwg-fetch";

class Api {

    constructor(host, apikey) {
        this.host = host;
        this.opts = {
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
                'Authorization' : apikey
            }
        };
    }

    /**
     * @return {Promise<any>}
     */
    async fetchArticles() {
        const uri = this.host + "/api/articles";
        const res = await fetch(uri, this.opts);
        if( res.status !== 200 ) {
            throw new Error("Request to fetch articles failed with status code: " + res.status);
        }
        return res.json();
    }

    /**
     *
     * @return {Promise<any>}
     */
    async fetchResources() {
        const uri = this.host + "/api/resources";
        const res = await fetch(uri, this.opts);
        if( res.status !== 200 ) {
            throw new Error("Request to fetch resources failed with status code: " + res.status);
        }
        return res.json();
    }

    /**
     * Sends visit to backedn and doesn't wait for the result
     */
    sendVisit() {
        const uri = this.host + "/api/visit";
        const opts = Object.assign({
            method : 'POST',
            json : {
                host : window.location.host,
                path : window.location.pathname
            }
            }, this.opts);
        fetch(uri, opts);
    }

    /**
     * Fetch content of an articles
     *
     * @param key {string} article key
     * @param ln {string} language (en/de)
     * @return {Promise<string>} article text
     */
    async fetchArticleContent(key, ln) {
        const url = '/articles/src/' + key + "-" + ln + ".html";
        const res = await fetch('/articles/src/' + key + "-" + ln + ".html");
        if( res.status !== 200 ) {
            throw new Error("Request to failed " + ln + " source of article " + key + " failed with status " + res.status);
        }
        return res.text();
    }

    async fetchArticleDetails(key) {
        const url = this.host + "/api/article/" + key;
        const res = await fetch(url, this.opts);
        if( res.status !== 200 ) {
            throw new Error("Request to fetch article details failed with status code: " + res.status);
        }
        return res.json();
    }
}

export default Api;