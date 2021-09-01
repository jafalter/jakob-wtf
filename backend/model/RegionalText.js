const {DataTypes} = require('sequelize');

const Factory = require('../lib/Factory');
const Text = require('./Text');
const Language = require('./Language');

const seq = Factory.getORM();

const RegionalText = seq.define('RegionalText', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
Text.hasMany(RegionalText, {foreignKey: 'textId'});
Language.hasMany(RegionalText, { foreignKey : 'languageId'});

module.exports = RegionalText;