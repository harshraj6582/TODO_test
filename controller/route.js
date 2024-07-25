const express = require("express");
const router = express.Router();
const Todo = require("../Model/schema")

// Inmporting the Model Schema of the Todo 



    // Find all the Todo
    router.get('/'), async(req , res) =>{
        try {
            const todo = await Todo.find();
            // This will find all the Todo fromt the Database
            res.json(todo);
        }

    catch(error){
        res.status(500).json({
            message : err.message
        })
    }
    }

    // Create a tdo 
    router.post('/' , asyn, (req,res) =>{
        const todo = new Todo({
            id : _id , name : req.body.name,  description : req.body.description,status : req.body.status,
             createdAt : new DateTime(),updatedAt : new DateTime(),

        })
        try {
            const newTodo = await todo.save();
            res.status(200).json(newTodo);
        }
        catch(error){
            console.log("Data not saved");
        }
    })

    module.export = router ;


