const { DataTypes } = require('sequelize');
const Factory = require('../../lib/Factory');

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
    author: {
        type: DataTypes.STRING
    }
});

Article.belongsTo(Category, { as: 'category' });
Article.belongsTo(Text, { as: 'title' });
Article.belongsTo(Text, { as: 'subtext' });
Article.belongsTo(Text, { as: 'key'});

module.exports = Article;

