const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'sql11.freemysqlhosting.net',
    user: 'sql11401811',
    password: 'JfIFUtwcru',
    database: 'sql11401811'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

module.exports = db;