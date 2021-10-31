const key = 'LEN';
const defaultLen = 'EN';

class Lang {

    /**
     * @param len
     */
    setLanguage(len) {
        if( len && ['EN', 'DE'].includes(len.toUpperCase()) ) {
            localStorage.setItem(key, len.toUpperCase());
        }
        else {
            console.error("Invalid language " + len);
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
        const val = localStorage.getItem(key);
        if( val !== null ) return val;
        const detect = this._browserDetect();
        if( detect !== null ) return  detect;
        return defaultLen;
    }

    /**
     *
     * @return {null||string}
     * @private
     */
    _browserDetect() {
        let len = null;
        let language = window.navigator.userLanguage || window.navigator.language;
        if( language ) {
            const code = language.substr(0,2).toUpperCase();
            if( code === 'EN' || code === 'DE' ) {
                len = code;
            }
        }
        return len;
    }
}

export default Lang