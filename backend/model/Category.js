const { DataTypes } = require('sequelize');

const Factory = require('../lib/Factory');
const Article = require('./Article');
const Resource = require('./Resources');

const seq = Factory.getORM();

const Category = seq.define('Category', {
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true
    },
    value : {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Category.hasMany(Article, { foreignKey : 'category'});
Category.hasMany(Resource, { foreignKey : 'resource'});

module.exports = Category;