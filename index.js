
const express = require('express');
const app =express();

const cors =require('cors');
const Port =process.env.Port||5000;

app.use(cors());
const course=require('./data/data.json');

app.get('/',(req,res)=>{
res.send("Now server is running");
});

app.get('/course',(req,res)=>{
    res.send(course);
})

app.listen(Port,()=>{
    console.log("server is running", Port);
});
