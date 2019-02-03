const express = require('express');
const router = express.Router();
var todoList = require('../controller/appController');


router.route('/books')
.get(todoList.list_all_books)
.post(todoList.create_a_book);

router.route('/books/:bookId')
.get(todoList.read_a_book)
.put(todoList.update_a_book)
.delete(todoList.delete_a_book);

module.exports = router;
      
