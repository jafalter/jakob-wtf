const Logger = require('./Logger');

let logger = null;

class Factory {

    static getLogger() {
        if( logger === null ) {
            logger = new Logger(Logger.DEBUG);
        }
        return logger;
    }

}

module.exports = Factory;