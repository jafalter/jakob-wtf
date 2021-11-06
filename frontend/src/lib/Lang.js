const key = 'LEN';
const defaultLen = 'EN';

class Lang {
    _language

    constructor() {
        const isDev = window.location.hostname === 'localhost';
        if( isDev ) {
            if( localStorage.getItem('lang') ) {
                this._language = localStorage.getItem('lang');
            }
            else {
                this._language = defaultLen;
            }
        }
        else {
            const isDe = window.location.hostname.toUpperCase().startsWith('DE');
            if( isDe ) {
                this._language = 'DE';
            }
            else {
                this._language = 'EN';
            }
        }
    }

    /**
     * First look in localstorage
     * Then try to detect from browser
     * Then return default value
     *
     * @return {string}
     */
    getLanguage() {
        return this._language
    }
}

export default Lang