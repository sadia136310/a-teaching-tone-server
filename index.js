
const express = require('express');
const app =express();
const cors =require('cors');
app.use(cors());

const Port =process.env.Port||5000;


const courses=require('./data/data.json');

app.get('/',(req,res)=>{
res.send("Now teaching is running");
});

app.get('/course',(req,res)=>{
    res.send(courses);
});

app.get('/course/:id',(req,res)=>{
const id = parseInt(req.params.id);
const selectedCourses=courses.find(c=>c.id===id);
console.log(id,selectedCourses);
res.send(selectedCourses);

});

app.listen(Port,()=>{
    console.log("teaching is running", Port);
});
