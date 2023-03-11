const { Router } = require("express");
const router = Router();

const Todo = require("../models/todo");

// get all todos
router.get("/", async (req, res) => {
    try {
        const todo = await Todo.find({});
        res.json(todo)
    }catch (error) {
        console.log({
            error,
            message: "Get metod iwlamadi, Nmadur notori ketgan!!",
        });
    }
});

//get by ID 
router.get("/:_id", async (req, res) => {
    try {
        const todo = await Todo.find({ _id: req.params._id});
     
       res.json(todo);
    } catch (error) {
        console.log({
            err,
            message: "Get by ID metod ishlamad"
        });
    }
});

// add POST - todo
router.post("/", async (req, res) => {
    const { title } = req.body;

    let todo = await Todo.findOne({ title });
    if (todo) return res.send("This todo alredy exists");

    todo = new Todo(req.body);
    await todo.save();

    res.send("Todo added: OK")
});

// edit device
router.patch("/:_id", async (req, res) => {
    try {
        const _id = req.params._id;
        const updTodo = req.body;

        const result = await Todo.findByIdAndUpdate(_id, updTodo);
        res.send(result);
    } catch (error) {
        console.log({
            err,
            message: "Patch metod iwlamadi"
        });
    }
});

// delete device
router.delete("/:_id", async (req, res) =>{
    try {
        await Todo.findByIdAndDelete({_id: req.params._id});

        res.send(`Todo with id: ${req.params._id} deleted: ok`);
    } catch (error) {
        console.log({
            err,
            message: "Delete",
        });
    }
});

module.exports = router;