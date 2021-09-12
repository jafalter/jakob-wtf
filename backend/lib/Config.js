const fs = require('fs');

const Logger = require('./Logger');
const {INTEGER} = require("sequelize");

const DEFAULT_AUTH = '123';
const DEFAULT_LOG_LVL =  Logger.DEBUG;
const TEST_DB = 'sqlite::memory:';
const DB_HOST = 'localhost';
const DB_PORT = 3306
const DB_USER = 'root';
const DB_PASS = ''
const DB_DB   = 'database';

const SECRET_PATH = '/run/secrets/';
const UTF8 = 'utf-8';

class Config {

    static getAuth() {
        const path = SECRET_PATH + 'auth';
        if( fs.existsSync(path) ) {
            return fs.readFileSync(path, UTF8);
        }
        else {
            return DEFAULT_AUTH;
        }
    }

    static getLogLevel() {
        const path = SECRET_PATH + 'log_lvl';
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

    /**
     *
     * @returns {string}
     */
    static getEnv() {
        return process.env.NODE_ENV
    }

    /**
     *
     * @returns {string}
     */
    static getTestDb() {
        return TEST_DB;
    }

    /**
     * @returns {string}
     */
    static getDBHost() {
        const path = SECRET_PATH + 'db_host';
        if( fs.existsSync(path) ) {
            return fs.readFileSync(path, UTF8);
        }
        else {
            return DB_HOST;
        }
    }

    /**
     * @returns {number}
     */
    static getDBPort() {
        const path = SECRET_PATH + 'db_port';
        if( fs.existsSync(path) ) {
            return parseInt(fs.readFileSync(path, UTF8));
        }
        else {
            return DB_PORT;
        }
    }

    /**
     * @returns {string}
     */
    static getDBUser() {
        const path = SECRET_PATH + 'db_user';
        if( fs.existsSync(path) ) {
            return fs.readFileSync(path, UTF8);
        }
        else {
            return DB_USER;
        }
    }

    /**
     * @returns {string}
     */
    static getDBPass() {
        const path = SECRET_PATH + 'db_pass';
        if( fs.existsSync(path) ) {
            return fs.readFileSync(path, UTF8);
        }
        else {
            return DB_PASS;
        }
    }

    /**
     * @returns {string}
     */
    static getDBDatabase() {
        const path = SECRET_PATH + 'db_db';
        if( fs.existsSync(path) ) {
            return fs.readFileSync(path, UTF8);
        }
        else {
            return DB_DB;
        }
    }
}

module.exports = Config;