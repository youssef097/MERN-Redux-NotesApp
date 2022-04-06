const mongoose = require("mongoose")

let noteSchema = mongoose.Schema({
    userId:{type:mongoose.SchemaTypes.ObjectId, required:true },
    title:{type:String, required:true},
    description:{type:String},
    type:{type:String, required:true},
      
}, {timestamps:true})

module.exports = mongoose.model("notes", noteSchema)