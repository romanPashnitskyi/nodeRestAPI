'use strict';

var sql = require('./db.js');

var Book = function(book){
    this.name = book.name;
    this.author = book.author;
    this.year = book.year;
    this.description = book.description;
};

Book.createBook = function createUser(newBook, result) {
    sql.query("INSERT INTO books set ?", newBook, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Book.getBookById = function createUser(bookId, result) {
    sql.query("Select id, name, author, year, description from books where id = ? ",
        bookId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Book.getAllBook = function getAllBook(result) {
    sql.query("Select * from books", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('books : ', res);
            result(null, res);
        }
    });
};

Book.updateById = function(id, name, result){
    sql.query("UPDATE books SET name = ?, author = ?, year = ?, description = ? " +
        "WHERE id = ?", [name.name, name.author, name.year, name.description, id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
    });
};

Book.remove = function(id, result){
     sql.query("DELETE FROM books WHERE id = ?", [id], function (err, res) {
         if (err) {
             console.log("error: ", err);
             result(null, err);
         } else {
             result(null, res);
         }
     });
};

module.exports = Book;
