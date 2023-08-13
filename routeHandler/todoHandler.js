const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const todoSchema = require("../schema/todoSchema");

const Todo = new mongoose.model("Todo", todoSchema);

// GET all the todos
router.get("/", async (req, res) => {
    res.send("hello")
});

// GET a todo by id
router.get("/:id", async (req, res) => {});
// POST todo
router.post("/", async (req, res) => {
    try {
        const newTodo = new Todo(req.body);
        await newTodo.save();
        res.status(200).json({
            message: "success"
        });
    } catch (err) {
        res.status(500).json({
            error: "Server Error"
        });
    }
});

// POST multiple todo
router.post("/all", async (req, res) => {});
// PUT todo
router.put("/:id", async (req, res) => {});
// DELETE todo
router.delete("/:id", async (req, res) => {});
module.exports = router;
