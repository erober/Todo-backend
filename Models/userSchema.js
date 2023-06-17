const mongoose =require('mongoose');

const userReg = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,  
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,  
    },
    mobileNo: {
        type: Number,
        required: true,     
    },
    tasks: [{
        task: {
            type: String,
            unique:true
        },
        alarm: {
            type: Date,
            default: Date.now
        },
        status :{
            type: Boolean
        }
    }]
})
var userRegData =mongoose.model('userRegData',userReg);
module.exports= userRegData;