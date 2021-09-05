const Logger = require('./Logger');

const DEFAULT_AUTH = '123';
const DEFAULT_LOG_LVL =  Logger.DEBUG;
const DEFAULT_DB = 'sqlite::memory:';

class Config {

    static getAuth() {
        const env = process.env;
        if( env.JAKOB_AUTH ) {
            return env.JAKOB_AUTH;
        }
        else {
            return DEFAULT_AUTH;
        }
    }

    static getLogLevel() {
        const env = process.env;
        if( env.JAKOB_LOG_LVL ) {
            switch ( env.JAKOB_LOG_LVL.toUpperCase() ) {
                case 'DEBUG' :
                    return Logger.DEBUG;
                case 'INFO' :
                default:
                    return Logger.INFO;
                case 'WARNING':
                case 'WARN':
                    return Logger.WARN;
                case 'ERROR':
                    return Logger.ERROR;
            }
        }
        else {
            return DEFAULT_LOG_LVL;
        }
    }

    static getDbCon() {
        const env = process.env;
        if( env.JAKOB_DB ) {
            return env.JAKOB_DB;
        }
        else {
            return DEFAULT_DB;
        }
    }
}

module.exports = Config;