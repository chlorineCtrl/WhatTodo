const express = require("express");
const isLoggedIn = require("./middleware/isLoggedIn");

const createTodoRoute = require("./routes/createTodoRoute");
const readTodosRoute = require("./routes/readTodosRoute");
const updateTodosRoute = require("./routes/updateTodosRoute");
const deleteTodoRoute = require("./routes/deleteTodoRoute");

const router = express.Router();

//auth
router.post("/login", require("./routes/loginRoute"));

//create
router.post("/todos", isLoggedIn, createTodoRoute);

//read
router.get("/todos", isLoggedIn, readTodosRoute);

//update
router.put("/todos/:id", isLoggedIn, updateTodosRoute);

//delete
router.delete("/todos/:id", isLoggedIn, deleteTodoRoute);

module.exports = router;
