const Sequelize = require('sequelize');

const Logger = require('./Logger');

let logger = null;
let sequelize = null;

class Factory {

    /**
     * @return {Logger}
     */
    static getLogger() {
        if( logger === null ) {
            logger = new Logger(Logger.DEBUG);
        }
        return logger;
    }

    /**
     * @return {Sequelize}
     */
    static getORM() {
        if( sequelize === null ) {
            sequelize = new Sequelize('sqlite::memory:', {
                pool: {
                    max: 5,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                }
            });
        }
        return sequelize;
    }

}

module.exports = Factory;