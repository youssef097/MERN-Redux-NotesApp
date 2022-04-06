const mongoose = require("mongoose")

let userSchema = mongoose.Schema({
    email:{type:String,required:true, unique:false, dropDups:true},
    name:{type:String, required:true},
    password:{type:String, required:true},
    image:{type:String,default:"" },
    notes:{type:Array, default:[]}         
}, {timestamps:true})

module.exports = mongoose.model("users", userSchema)