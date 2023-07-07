const Author = require('../models/todo')

const controllerTodo = {
    create : async (req,res) =>{
        try {
            const todo = req.body.todo
            await Todo.create({
                todo : todo
            }).then(console.log('Todo created'))
            res.json({msg:'created'})
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },
    getTodo: async (req,res) => {
        try {
            const todos = await Todo.find({})
            res.json(todos)
        } catch (error) {
            return res.status(500).json({msg:error.message})            
        }
    },
    getTodosById: async (req,res) =>{
        try {
            const {id} = req.params
            const todo = await Todo.findById(id)
            res.json(todo)
            
        } catch (error) {
            return res.status(500).json({msg:error.message})                        
        }
    },
    updateTodo: async (req,res) =>{
        try {
            const {id} = req.params
            const todo = req.body.todo
            await Todo.findByIdAndUpdate(id,
                {
                todo : todo
                })
                res.json({msg:'update'})
        } catch (error) {
            return res.status(500).json({msg:error.message})                                    
        }
    },
    deleteTodo: async (req,res) =>{
        try {
            const {id} = req.params
            await Todo.findByIdAndDelete(id)
            res.json({msg:'Delete'})
        } catch (error) {
            return res.status(500).json({msg:error.message})                                         
        }
    }
}

module.exports = controllerTodo