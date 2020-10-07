var express = require('express');
var router = express.Router();

var book_phone = require("./book_phone");

router.get('/get_All', book_phone.All);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;