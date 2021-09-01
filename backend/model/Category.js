const { DataTypes } = require('sequelize');

const Factory = require('../lib/Factory');

const seq = Factory.getORM();

const Category = seq.define('Category', {
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement: true
    },
    value : {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Category;