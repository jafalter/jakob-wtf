const fs = require('fs');

const Logger = require('./Logger');

const DEFAULT_AUTH = '123';
const DEFAULT_LOG_LVL =  Logger.DEBUG;
const DEFAULT_DB = 'sqlite::memory:';

const SECRET_PATH = '/run/secrets/';
const UTF8 = 'utf-8';

class Config {

    static getAuth() {
        const path = SECRET_PATH + 'AUTH';
        if( fs.existsSync(path) ) {
            return fs.readFileSync(path, UTF8);
        }
        else {
            return DEFAULT_AUTH;
        }
    }

    static getLogLevel() {
        const env = process.env;
        const path = SECRET_PATH + 'LOG_LVL';
        if( fs.existsSync(path) ) {
            switch ( fs.readFileSync(path, UTF8).toUpperCase() ) {
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
        const path = SECRET_PATH + 'DB';
        if( fs.existsSync(path) ) {
            return fs.readFileSync(path, UTF8);
        }
        else {
            return DEFAULT_DB;
        }
    }
}

module.exports = Config;