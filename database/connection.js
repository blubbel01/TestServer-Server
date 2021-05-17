'use strict';
const fs = require('fs');
const path = require('path');
const {Sequelize, DataTypes} = require('sequelize');
const basename = path.basename(module.filename);
const databaseConfig = require("./config.js").database;
const models = require('./index');
let db;

module.exports = () => {
    db = new Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, {
        host: databaseConfig.host,
        port: databaseConfig.port,
        dialect: databaseConfig.dialect,
        define: {
            timestamps: false
        },
        logging: false,
    });


    fs
        .readdirSync(path.join(__dirname, "models"))
        .filter(file =>
            (file.indexOf('.') !== 0) &&
            (file !== basename) &&
            (file.slice(-3) === '.js'))
        .forEach((file) => {
            const model = require(path.join(__dirname, "models", file))(db, DataTypes);
            db.models[model.name] = model;
        });

    db.sync({alter: true, force: false});

    models.database = db;


    require('./associations')();

};
