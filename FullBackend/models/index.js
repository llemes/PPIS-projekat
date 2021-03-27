"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(__filename);
var env = process.env.NODE_ENV || "development";
const config = require('../config/configuration.js');

let db = {};
let sequelize;

if (config.db) {
    sequelize = new Sequelize(
        config.db.database,
        config.db.username,
        config.db.password, { host: config.db.host, dialect: config.db.dialect }
    );
} else {
    console.log('Missing db config!');
}
// console.log(fs.readdirSync(__dirname));
fs.readdirSync(__dirname)
    .filter(file => {
        return (
            file.indexOf(".") !== 0 &&
            file !== basename &&
            file.slice(-3) === ".js" && !~file.indexOf("dbconnection")
        );
    })
    .forEach(file => {
        var model = sequelize["import"](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;