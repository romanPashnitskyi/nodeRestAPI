'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'romapash997',
    database : 'bookdb'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
