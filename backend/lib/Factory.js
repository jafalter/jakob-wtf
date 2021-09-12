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
            if( Config.getEnv() !== 'production' ) {
                sequelize = new Sequelize(Config.getTestDb())
            }
            else {
                const opts = {
                    pool: {
                        max: 5,
                        min: 0,
                        acquire: 30000,
                        idle: 10000
                    },
                    dialect: 'mariadb',
                    host: Config.getDBHost(),
                    port: Config.getDBPort()
                };
                if (Config.getLogLevel() !== Logger.DEBUG) {
                    opts.logging = false;
                }
                logger.info("Database options", opts);
                sequelize = new Sequelize(Config.getDBDatabase(), Config.getDBUser(), Config.getDBPass(), opts);
            }
        }
        return sequelize;
    }

}

module.exports = Factory;