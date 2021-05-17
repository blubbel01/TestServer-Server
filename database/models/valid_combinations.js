module.exports = (sequelize, DataTypes) => {
    return sequelize.define('valid_combinations', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        gender: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        drawableTorso: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        drawableUndershirt: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        drawableTop: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        valid: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
    }, {
        tableName: 'cloth_combinations'
    });
};
