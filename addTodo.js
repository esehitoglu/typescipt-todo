"use strict";
exports.__esModule = true;
exports.addTodo = void 0;
var db_1 = require("./db");
var addTodo = function (req, res) {
    var body = req.body;
    var todoItem = {
        isDone: false,
        text: body.text,
        id: Math.random().toString()
    };
    db_1.db.push(todoItem);
    res.status(200).send({
        msg: 'Başarılı bir şekilde eklendi'
    });
};
exports.addTodo = addTodo;
