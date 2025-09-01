const express=require('express')

const students = require('./Students')
const app=express();
const port = 3000;

app.use(express.json());
app.get('/students', (req, res) => {
    res.json(students);
});

app.post('/students',(req,res)=>{
    const newStudent ={
        id: students.length + 1,
        name: req.body.name,
        marks: req.body.marks,
        email: req.body.email
    }
    students.push(newStudent);
    res.status(201).json(newStudent);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});