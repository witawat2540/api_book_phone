// const { Op } = require("sequelize");
const sequelize = require("./config").sequelize;
const book_phone = require("./model/model_book_phone");

exports.All = async(req, res, next) => {
    res.send(await book_phone.findAll());
};

exports.Add_book = async(req, res, next) => {
    res.send(await book_phone.create(req.body));
};

exports.Update_book = async(req, res, next) => {
    res.send(await book_phone.update(req.body, { where: { id: req.params.id } }));
};

exports.bookDelete = async(req, res, next) => {
    res.json(
        await book_phone.destroy({
            where: {
                id: req.params.id,
            },
        })
    );
};

exports.bookSearch = async(req, res, next) => {
    res.send(
        // await book_phone.findAll({
        //     where: {
        //         [Op.or]: [{
        //             nickname: {
        //                 [Op.like]: "%" + req.body.keyword + "%",
        //             },
        //         }, ],
        //         [Op.or]: [{
        //             tel: {
        //                 [Op.like]: "%" + req.body.keyword + "%",
        //             },
        //         }, ],
        //     },
        // })
        await sequelize.query("SELECT * FORM phons")
    );
};