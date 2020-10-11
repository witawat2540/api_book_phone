var express = require('express');
var router = express.Router();

var book_phone = require("./book_phone");

router.get('/get_All', book_phone.All);
router.post('/add_book', book_phone.Add_book);
router.put('/update_book/:id', book_phone.Update_book);
router.delete('/delete_book/:id', book_phone.bookDelete);
router.get('/Search_book/', book_phone.bookSearch);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;