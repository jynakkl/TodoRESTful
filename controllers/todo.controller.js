import Todo from "../models/todo.model.js";

const getAllTodos = async (req,res) => {
    const todo = await Todo.find();
    res.json({ todo });
}

const getTodoById = async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
        res.json({ message: "Todo not found" });
    }
    else {
        res.json({ todo });

    }
}

const createTodo = async (req, res) => {
    if (!req.body.todoTitle || !req.body.todoContent) {
        res.json({message:error});
    }
    else {
        const todo = await Todo.create(req.body);
        res.json({ todo });
    }
}

const updateTodo = async (req, res) => {
    if (!req.body.todoTitle || !req.body.todoContent) {
        res.json({message:error});
    }
    else {
        const {id} = req.params;
        const todo = await Todo.findByIdAndUpdate(id,req.body);
        res.json({ message:"Todo updating successful" });
    }
}

const deleteTodo = async (req, res) => {
        const {id} = req.params;
        const todo = await Todo.findByIdAndDelete(id,req.body);
        res.json({ message:"Todo deleting successful" });
}


export {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
}