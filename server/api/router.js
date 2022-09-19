const express=require('express');
const router=express.Router();
const todo_model=require("../model/todo");



router.get("/gettodo", function (req, res) {
    todo_model.find({active:true}).then(documents => {
    res.json({status:200,message:'Users data fetched successfully',Userdata: documents});
    });
});

router.post("/savetodo",async function(req,res){
    let todos=new todo_model({
        todo_id:req.body.todo_id,
        todo_value:req.body.todo_value,
        active:req.body.active
    });

    await todos.save().then(data=>{
        res.send({
            message:"User created successfully!!",
            user:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "error"
        });
    })
});

router.put("/updatetodo/:id",async function(req,res){
    const todo_id=req.params.id;

    await todo_model.findByIdAndUpdate(todo_id,req.body,{useFindAndModify:false}).then(data=>{
        if (!data) {
            res.status(404).send({
                message: `todo not found.`
            });
        }else{
            res.send({ message: "Todo updated successfully." });
        }
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
    });

module.exports=router;