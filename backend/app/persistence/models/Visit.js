const { DataTypes } = require('sequelize');

const Factory = require('../../lib/Factory');

const seq = Factory.getORM();

const Visit = seq.define('Visit', {
    id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },
    session : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    host : {
        type: DataTypes.STRING,
        allowNull: false
    },
    path : {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateTime: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    createdAt : false,
    updatedAt: false,
    indexes: [
        {
            fields: ["session"]
        },
        {
            fields: ["dateTime"]
        },
        {
            fields: ["host"]
        }
    ]
});


module.exports = Visit;