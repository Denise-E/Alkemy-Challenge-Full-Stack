module.exports = (Sequelize, DataTypes) => {
    const alias = "Operation";

    const cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        }, 
        type: {
            notNull: true,
            type: DataTypes.TEXT,
        },
        description: {
            notNull: true,
            type: DataTypes.TEXT,
        },
        value: {
            notNull: true,
            type: DataTypes.TEXT,
        },
        date: {
            notNull: true,
            type: DataTypes.TEXT,
        }
    }

    const config = {
        timestamps: false,
    }

    const Operation = Sequelize.define(alias,cols,config);
    return Operation
}