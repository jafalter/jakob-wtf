class Api {

    constructor(host, apikey) {
        this.host = host;
        this.apikey = apikey;
        this.opts = {
            headers : {
                'Accept' : 'application/json',
                'Authorization' : 'ea3617fc98703d77cf64c40889f325b4959a666b0ba7786f0a4fee31656fab89'
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
        return res.json()
    }
}

export default Api;