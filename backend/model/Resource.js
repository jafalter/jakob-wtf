const {DataTypes} = require('sequelize');
const Factory = require('../lib/Factory');

const Category = require('./Category');
const Text = require('./Text');

const seq = Factory.getORM();

const Resource = seq.define('Resource', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    url: {
        type: DataTypes.TEXT
    }
});

Resource.belongsTo(Category, {as: 'category'});
Resource.belongsTo(Text, {as: 'title'});

module.exports = Resource;