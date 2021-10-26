const key = 'LEN';
const defaultLen = 'EN';

class Lang {

    /**
     * @param len
     */
    setLanguage(len = null) {
        if( len === null ) {
            // Detect from browser
            let language = window.navigator.userLanguage || window.navigator.language;
            if( language ) {
                const code = language.substr(0,2).toUpperCase();
                if( code === 'EN' || code === 'DE' ) {
                    len === code;
                }
            }
        }
        if( ['EN', 'DE'].includes(len.toUpperCase()) ) {
            localStorage.setItem(key, len.toUpperCase());
        }
    }

    /**
     * @return {string}
     */
    getLanguage() {
        const val = localStorage.getItem(key);
        if( val !== null ) return val;
        return defaultLen;
    }
}

export default Lang