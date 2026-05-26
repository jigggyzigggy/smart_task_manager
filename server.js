
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let tasks = [];

app.get('/api/tasks', (req,res)=> res.json(tasks));

app.post('/api/tasks', (req,res)=>{
  const task = {id: Date.now(), text: req.body.text};
  tasks.push(task);
  res.json(task);
});

app.delete('/api/tasks/:id',(req,res)=>{
  tasks = tasks.filter(t=>t.id != req.params.id);
  res.json({success:true});
});

app.listen(3000, ()=> console.log("Server running on http://localhost:3000"));
