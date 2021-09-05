const Sequelize = require('sequelize');

const Logger = require('./Logger');
const Config = require('./Config');

let logger = null;
let sequelize = null;

class Factory {

    /**
     * @return {Logger}
     */
    static getLogger() {
        if (logger === null) {
            logger = new Logger(Config.getLogLevel());
        }
        return logger;
    }

    /**
     * @return {Sequelize}
     */
    static getORM() {
        if (sequelize === null) {
            const opts = {
                pool: {
                    max: 5,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                },
                dialect: 'mariadb'
            };
            if (Config.getLogLevel() !== Logger.DEBUG) {
                opts.logging = false;
            }
            sequelize = new Sequelize(Config.getDbCon(), opts);
        }
        return sequelize;
    }

}

module.exports = Factory;