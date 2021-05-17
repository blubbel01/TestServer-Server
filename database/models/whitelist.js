module.exports = (sequelize, DataTypes) => {
    return sequelize.define('whitelist', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        socialClubName: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        nickname: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        team: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        activity: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
    }, {
        tableName: 'whitelist'
    });
};
