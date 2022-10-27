
const express = require('express');
const app =express();
const cors =require('cors');

app.use(cors());

const Port =process.env.Port||5000;


const course=require('./data/data.json');
const categories=require('./data/categories.json');

app.get('/',(req,res)=>{
res.send("Now teaching-tone-server is running");
});


app.get('/course-categories',(req,res)=>{
    res.send(categories);
});

app.get('/course-categories/:id',(req,res)=>{
const id = req.params.id;
const CategoryCourse=course.filter(c=>c.id===id);
// console.log(id,CategoryCourse);
res.send(CategoryCourse);

});

app.get('/course',(req,res)=>{
    res.send(course);
});
app.get('/course/:id',(req,res)=>{
const id = parseInt(req.params.id);
const selectedCourses=course.find(c=>c.id===id);
console.log(id,selectedCourses);
res.send(selectedCourses);

});


app.get('/check/:id',(req,res)=>{
const id = parseInt(req.params.id);
const selectedCourses=course.find(c=>c.id===id);
console.log(id,selectedCourses);
res.send(selectedCourses);

});

app.listen(Port,()=>{
    console.log("teaching-tone is running", Port);
});
