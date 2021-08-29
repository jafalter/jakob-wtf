const { DataTypes } = require('sequelize');
const Factory = require('../lib/Factory');

const seq = Factory.getORM();

const Resources = seq.define('Resources', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true
    }
});

module.exports = Resources;