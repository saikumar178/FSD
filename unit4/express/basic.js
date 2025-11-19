const express = require("express");
const app = express();
// Middleware to parse JSON
app.use(express.json());
// Temporary in-memory database (array)
let students = [];
let idCounter = 1;
/* ------------------------------
   1. CREATE Student (POST)
------------------------------ */
app.post("/students", (req, res) => {
  const newStudents = req.body;  // array of students
  students.push(...newStudents);

  res.json({
    success: true,
    message: "Students added successfully!",
    data: newStudents
  });
});

/* ------------------------------
   2. READ all Students (GET)
------------------------------ */
app.get("/students", (req, res) => {
  res.json({
    success: true,
    count: students.length,
    students,
  });
});

/* ------------------------------
   3. READ Single Student (GET)
------------------------------ */
app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({
      success: false,
      message: "Student not found!"
    });
  }

  res.json({
    success: true,
    student,
  });
});

/* ------------------------------
   4. UPDATE Student (PUT)
------------------------------ */
app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({
      success: false,
      message: "Student not found!"
    });
  }

  const { name, age, department } = req.body;

  if (!name || !age || !department) {
    return res.status(400).json({
      success: false,
      message: "Name, age, and department are required for update!"
    });
  }

  student.name = name;
  student.age = age;
  student.department = department;

  res.json({
    success: true,
    message: "Student updated successfully!",
    student,
  });
});

/* ------------------------------
   5. DELETE Student (DELETE)
------------------------------ */
app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Student not found!"
    });
  }

  students.splice(index, 1);

  res.json({
    success: true,
    message: "Student deleted successfully!",
  });
});

/* ------------------------------
   Start the Server
------------------------------ */
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});