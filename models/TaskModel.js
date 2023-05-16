const mongoose=require("mongoose")
const taskschema=new mongoose.Schema({
    task:{
        type:String,
        required:true,
    },
})

module.exports=mongoose.model("task",taskschema)