const express = require('express')
const parser=require('body-parser');
const mongoose= require('mongoose');

// Initialize the app
const app = express();

mongoose.connect("mongodb+srv://gabbar329:<password>@cluster0.qlr2voe.mongodb.net/toDo?retryWrites=true&w=majority")

app.use(parser.json());
app.use(parser.urlencoded({extended:true}));

app.use('*',function(req,res,next){
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Headers','content-type');
    next();    
});

app.get('/',(req,res)=>{
    res.json("Welcome to ToDo")
})

const tasks = require('./Routes/tasks')
app.use('/tasks',tasks)

const userReg = require('./Routes/userReg')
app.use('/userReg',userReg)

const passwordReset = require('./Routes/passwordReset')
app.use('/passwordReset',passwordReset)

// Setup server port
var port = process.env.PORT || 8000;

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running Todo on port " + port);
});