"use strict";
exports.__esModule = true;
var express_1 = require("express");
var addTodo_1 = require("./addTodo");
var deleteTodo_1 = require("./deleteTodo");
var getTodos_1 = require("./getTodos");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.post('/add', addTodo_1.addTodo);
app.get('/todos', getTodos_1.getTodos);
app["delete"]('/deleteTodo/:id', deleteTodo_1.deleteTodo);
app.listen(4000, function () {
    console.log("server başarılı bir şekilde yüklendi");
});
