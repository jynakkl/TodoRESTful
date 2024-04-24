import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    todoTitle:{
        type:String,
        required:true,
        unique:true
    },
    todoContent:{
        type:String,
        required:true,
        unique:true
    },
},{timestamps:true});

const Todo = mongoose.model("Todo",todoSchema);

export default Todo;