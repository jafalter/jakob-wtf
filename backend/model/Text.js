const {DataTypes} = require('sequelize');

const Factory = require('../lib/Factory');
const Language = require('./Language');
const Article = require('./Article');
const Resource = require('./Resources');

const seq = Factory.getORM();

const Text = seq.define('Text', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Text.belongsToMany(Article, {
    through: 'ArticleTitles',
    foreignKey: 'title',
    otherKey: 'article',
    timestamps: false
});
Article.belongsToMany(Text, {
    through: 'ArticleTitles',
    foreignKey: 'article',
    otherKey: 'title',
    timestamps: false
});
Text.belongsToMany(Article, {
    through: 'ArticleSubtexts',
    foreignKey: 'subtext',
    otherKey: 'article',
    timestamps: false
});
Article.belongsToMany(Text, {
    through: 'ArticleSubtexts',
    foreignKey: 'article',
    otherKey: 'subtext',
    timestamps: false
});
Text.belongsToMany(Article, {
    through: 'ArticleKeys',
    foreignKey: 'key',
    otherKey: 'article',
    timestamps: false
});
Article.belongsToMany(Text, {
    through: 'ArticleKeys',
    foreignKey: 'article',
    otherKey: 'key',
    timestamps: false
});
Text.belongsToMany(Resource, {
    through: 'ResourceTexts',
    foreignKey: 'text',
    otherKey: 'resource',
    timestamps: false
});
Resource.belongsToMany(Text, {
    through: 'ResourceTexts',
    foreignKey: 'resource',
    otherKey: 'text',
    timestamps: false
});

module.exports = Text;