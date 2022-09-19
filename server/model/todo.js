const mongoose=require("mongoose");
const schema=mongoose.Schema;

const todoSchema=new schema({
    todo_id:{type:Number,required:true},
    todo_value:{type:String,required:true},
    active:{type:Boolean,required:true}
});

module.exports=mongoose.model("todos",todoSchema,'todo');

