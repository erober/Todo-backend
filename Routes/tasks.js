const express = require("express");
const router = express.Router();
const {newTask, getTasks, updateTask, deleteTask } = require('../Controllers/tasks')

router.get("/",(req,res)=>{
    getTasks(req,res)    
})

router.post("/",(req,res)=>{
    newTask(req,res)   
})

router.put("/",(req,res)=>{
    updateTask(req,res)   
})

router.put("/delete",(req,res)=>{
    deleteTask(req,res)   
})

module.exports=router