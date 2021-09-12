const DEBUG = 0;
const INFO = 1;
const WARN = 2;
const ERROR = 3;

class Logger {

    constructor(level) {
        this.level = level;
    }

    debug(msg, obj = null) {
        if( this.level <= DEBUG ) {
            this._msg(DEBUG, msg, obj);
        }
    }

    info(msg, obj = null) {
        if( this.level <= INFO ) {
            this._msg(INFO, msg, obj);
        }
    }

    warn(msg, obj = null) {
        if( this.level <= WARN ) {
            this._msg(WARN, msg, obj);
        }
    }

    error(msg, obj = null) {
        if( this.level <= ERROR ) {
            this._msg(ERROR, msg, obj);
        }
    }

    /**
     *
     * @param {number} lvl
     * @param {string} msg
     * @param {object||null} obj
     * @private
     */
    _msg(lvl, msg, obj) {
        const lvlStr = lvl === DEBUG ? 'DEBUG' : lvl === INFO ? 'INFO' : lvl === WARN ? 'WARN' : 'ERROR';
        let logmsg = new Date() + " " + lvlStr + " " + msg;
        if( obj ) logmsg += JSON.stringify(obj);
        console.log(logmsg);
    }
}

module.exports = Logger;
module.exports.DEBUG = DEBUG;
module.exports.INFO = INFO;
module.exports.WARN = WARN;
module.exports.ERROR = ERROR;