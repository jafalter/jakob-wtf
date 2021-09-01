const { DataTypes } = require('sequelize');
const Factory = require('../lib/Factory');

const Category = require('./Category');
const Text = require('./Text');

const seq = Factory.getORM();

const Article = seq.define('Article', {
    id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },
    image : {
        type: DataTypes.STRING,
        allowNull: false
    },
    file : {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Category.hasMany(Article, { as: 'category', foreignKey : 'categoryId'});
Text.hasMany(Article, {foreignKey: 'titleId'});
Text.hasMany(Article, {foreignKey: 'subtextId'});
Text.hasMany(Article, {foreignKey: 'keyId'});

module.exports = Article;

