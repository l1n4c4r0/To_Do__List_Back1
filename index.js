const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()

const Todo = require("./models/todo")
const todo = require("./models/todo")

const bodyParser = require("body-parser")

const app = express()
const port = 3000

app.set("view engine", "ejs")
app.set('port' ,port)
app.use(express.json())
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/api/todo',todoRoutes)

app.get("/", (request, response) => {
    Todo.find()
    .then(result => {
        response.render("index", { data: result})
        console.log(result)
    })
})

app.post("/", (request, response) => {
    const todo = new Todo({
        todo: request.body.todoValue
    })
    todo.save()
    .then(result => {
        response.redirect("/")
    })
})

app.delete("/:id", (request, response) => {
    Todo.findByIdAndDelete(request.params.id)
    .then(result => {
        console.log(result)
    })
})

mongoose.connect(process.env.MONGO_DB_URI)
.then(()=> console.log('conect to DB'))
.catch((err)=> console.error(err))

app.listen(port, () => {
    console.log("Server is running on port " + port)
})


