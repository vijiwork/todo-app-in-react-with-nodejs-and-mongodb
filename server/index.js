const express=require('express');
const app=express();
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config=require("./config/db");
const connection=mongoose.connect(config.database,{useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/v1/",require('./api'));
app.use(express.static(path.join(__dirname, 'public')));

const PORT=process.env.PORT || 3001;

if(connection){
  console.log("database connected");
  }
  else{
  console.log("database connection error");
  }


app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`);
});