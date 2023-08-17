
const express = require("express");
const router = express.Router();

const todoController = require("./contoller.js");

router.route("/")
        .post(todoController.addTodo)
        .get(todoController.getAllTodos)

router.route("/:id")
        .delete(todoController.deleteTodo)
        .put(todoController.editTodos)
        .get(todoController.getTodo);

module.exports = router;