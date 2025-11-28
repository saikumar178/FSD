const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

// FIXED CONNECTION
mongoose.connect('mongodb://localhost:27017/schoolDB')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  marks: Number
});

const Student = mongoose.model('Student', studentSchema);

// CRUD
app.post('/students', async (req, res) => {
  const s = new Student(req.body);
  await s.save();
  res.status(201).json(s);
});

app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

app.get('/students/:id', async (req, res) => {
  const students = await Student.findById(req,params.id);
  res.json(students);
});

app.put('/students/:id', async (req, res) => {
  const s = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!s) return res.status(404).json({ message: 'Not found' });
  res.json(s);
});

app.delete('/students/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

// Average marks
app.get('/students/average', async (req, res) => {
  const avg = await Student.aggregate([
    { $group: { _id: null, avgMarks: { $avg: "$marks" } } }
  ]);
  res.json(avg);
});

app.listen(3000, () => console.log('Server running'));