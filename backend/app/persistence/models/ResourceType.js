const seq = Factory.getORM();

const ResourceType = seq.define('Resource', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = ResourceType;
