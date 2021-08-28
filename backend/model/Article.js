const { DataTypes } = require('sequelize');
const Factory = require('../lib/Factory');

const seq = Factory.getORM();

const Article = seq.define('Article', {
    id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey : true
    },
});

module.exports = Article;
