"use strict";
exports.__esModule = true;
exports.getTodos = void 0;
var db_1 = require("./db");
var getTodos = function (req, res) {
    res.status(200).json(db_1.db);
};
exports.getTodos = getTodos;
