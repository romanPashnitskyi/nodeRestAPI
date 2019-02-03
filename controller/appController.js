'use strict';

var Book = require('../model/appModel.js');

exports.list_all_books = function(req, res) {
  Book.getAllBook(function(err, book) {
    console.log('controller');
    if (err)
      res.send(err);
      console.log('res', book);
    res.send(book);
  });
};

exports.create_a_book = function(req, res) {
  var new_book = new Book(req.body);

  if(!new_book.name || !new_book.author){
            res.status(400).send({ error:true, message: 'Please provide book/author' });
  } else {
  Book.createBook(new_book, function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
}};

exports.read_a_book = function(req, res) {
  Book.getBookById(req.params.bookId, function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};


exports.update_a_book = function(req, res) {
  Book.updateById(req.params.bookId, new Book(req.body), function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};


exports.delete_a_book = function(req, res) {
  Book.remove( req.params.bookId, function(err, book) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
