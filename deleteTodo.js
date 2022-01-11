"use strict";
exports.__esModule = true;
exports.deleteTodo = void 0;
var db_1 = require("./db");
var deleteTodo = function (req, res) {
    var id = req.params.id;
    var todoIndex = db_1.db.findIndex(function (todo) { return todo.id === id; });
    if (todoIndex >= 0) {
        db_1.db.splice(todoIndex, 1);
    }
    return res.status(200).send({
        msg: "ID'si ".concat(id, " olan ba\u015Far\u0131l\u0131 bir \u015Fekilde silindi")
    });
};
exports.deleteTodo = deleteTodo;
