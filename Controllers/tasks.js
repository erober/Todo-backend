const express = require('express')

// Import  model
const userRegData = require('../Models/userSchema');

let newTask = (req, res)=> {
    userRegData.find({username: req.body.username })
    .exec()
    .then(user=>{
        if(user.length>0){
            user[0].tasks.push(req.body.task)      
            user[0].save()
            res.send("Task Added") 
        }
        else{
            res.send("No such username exists")
        }
    })
}

let getTasks = (req, res)=> {
    userRegData.find({username: req.body.username })
    .exec()
    .then(user=>{
        if(user.length>0){
            res.send(user[0].tasks) 
        }
        else{
            res.send("No such username exists")
        }
    })
}

let updateTask = (req, res)=> {
    userRegData.find({username: req.body.username})
    .exec()
    .then(user=>{
        if(user.length>0){
            let foundTask = 0;
            for(let i=0;i< user[0].tasks.length;i++){
                if(user[0].tasks[i].task== req.body.task.task){
                    user[0].tasks[i]= req.body.task
                    user[0].save()
                    foundTask =1;
                    res.send(user[0].tasks)
                }               
            }
            if(foundTask==0)
                res.send("No such task exists")
        }
        else{
            res.send("No such username exists")
        }
    })
}

let deleteTask = (req, res)=> {
    userRegData.find({username: req.body.username })
    .exec()
    .then(user=>{
        if(user.length>0){
            for(let i=0;i< user[0].tasks.length;i++){
                if(user[0].tasks[i].task== req.body.task.task){
                    user[0].tasks.splice(i,1)
                    user[0].save()
                    res.send(user[0].tasks)
                }                 
            }
        }
        else{
            res.send("No such username exists")
        }
    })
}



module.exports = {newTask, getTasks, updateTask, deleteTask}