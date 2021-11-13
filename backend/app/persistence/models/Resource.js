const {DataTypes} = require('sequelize');
const Factory = require('../../lib/Factory');

const Category = require('./Category');
const ResourceType = require('./ResourceType');

const seq = Factory.getORM();

const Resource = seq.define('Resource', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    url: {
        type: DataTypes.TEXT
    },
    audio: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    title: {
        type: DataTypes.TEXT
    },
    author: {
        type: DataTypes.STRING
    }
});

Resource.belongsTo(Category, {as: 'category'});
Resource.belongsTo(ResourceType, {as: 'type'});

module.exports = Resource;