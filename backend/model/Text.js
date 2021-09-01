const {DataTypes} = require('sequelize');

const Factory = require('../lib/Factory');

const seq = Factory.getORM();

const Text = seq.define('Text', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
});

module.exports = Text;