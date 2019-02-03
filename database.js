const mysql = require('mysql');

const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'romapash997',
    database: 'bookdb'
});

mc.connect();

module.exports = mc; 
