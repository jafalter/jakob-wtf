const { DataTypes } = require('sequelize');
const Factory = require('../lib/Factory');
const Text = require('./Text');

const seq = Factory.getORM();

const Language = seq.define('Language', {
    id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },
    value : {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Language.hasMany(Text, { foreignKey : 'lang'});

module.exports = Language;