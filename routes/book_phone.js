const {
    Op
} = require('sequelize');
const book_phone = require('./model/model_book_phone');


exports.All = (req, res, next) => {
    res.send("Hello Word");
};