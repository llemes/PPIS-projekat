const mysql = require('mysql');
const config = require('./config/configuration.js');

const db = mysql.createConnection({
    host: config.db.host,
    user: config.db.username,
    password: config.db.password,
    database: config.db.database,
    dialect: config.db.dialect,
    port: config.db.port
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

module.exports = db;