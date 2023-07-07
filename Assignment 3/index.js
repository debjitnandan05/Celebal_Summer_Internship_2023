const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { v4: uuidv4 } = require("uuid");
const PORT = 3000;
const app = express();
app.use(bodyParser.json());

const dataFilePath = './data.json';

// Read data from JSON file
const readData = () => {
  try {
    const data = fs.readFileSync(dataFilePath);
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Write data to JSON file
const writeData = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data));
};

// Get all students
app.get('/students', (req, res) => {
  const students = readData();
  res.json(students);
});

// Get a single student by ID
app.get('/students/:id', (req, res) => {
  const students = readData();
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ error: 'Student not found' });
  }
});

// Create a new student
app.post('/students', (req, res) => {
  const students = readData();
  const newStudent = {
    id:uuidv4(),
    name: req.body.name,
    department: req.body.department,
    roll: req.body.roll,
    age: req.body.age,
  };
  students.push(newStudent);
  writeData(students);
  res.json(newStudent);
});

// Update a student
app.put('/students/:id', (req, res) => {
  const students = readData();
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (student) {
    student.name = req.body.name;
    student.department = req.body.department;
    student.roll = req.body.roll;
    student.age = req.body.age;
    writeData(students);
    res.json(student);
  } else {
    res.status(404).json({ error: 'Student not found' });
  }
});

// Delete a student
app.delete('/students/:id', (req, res) => {
  const students = readData();
  const studentIndex = students.findIndex((s) => s.id === parseInt(req.params.id));
  if (studentIndex !== -1) {
    const deletedStudent = students.splice(studentIndex, 1);
    writeData(students);
    res.json(deletedStudent);
  } else {
    res.status(404).json({ error: 'Student not found' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
