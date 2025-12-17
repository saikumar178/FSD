const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory teacher list (resets when server restarts)
let teachers = [];
let idCounter = 1;

// --- ROUTES ---

/**
 * CREATE A TEACHER (POST)
 * URL: http://localhost:3000/teachers
 */
app.post("/teachers", (req, res) => {
    const { name, department, experience, email } = req.body;

    // Basic Validation
    if (!name || !department || !experience || !email) {
        return res.status(400).json({ error: "All fields (name, department, experience, email) are required." });
    }

    const newTeacher = {
        id: idCounter++,
        name,
        department,
        experience,
        email
    };

    teachers.push(newTeacher);
    // Return 201 Created and the new object
    res.status(201).json({ 
        message: "Teacher added successfully!", 
        teacher: newTeacher 
    });
});

/**
 * GET ALL TEACHERS (GET)
 * URL: http://localhost:3000/teachers
 */
app.get("/teachers", (req, res) => {
    res.status(200).json(teachers);
});

/**
 * GET TEACHER BY ID (GET)
 * URL: http://localhost:3000/teachers/:id
 */
app.get("/teachers/:id", (req, res) => {
    const teacherId = parseInt(req.params.id);
    const teacher = teachers.find(t => t.id === teacherId);

    if (!teacher) {
        return res.status(404).json({ error: "Teacher not found." });
    }
    res.status(200).json(teacher);
});

/**
 * UPDATE TEACHER BY ID (PUT)
 * URL: http://localhost:3000/teachers/:id
 */
app.put("/teachers/:id", (req, res) => {
    const teacherId = parseInt(req.params.id);
    const teacher = teachers.find(t => t.id === teacherId);

    if (!teacher) {
        return res.status(404).json({ error: "Teacher not found." });
    }

    const { name, department, experience, email } = req.body;

    // Update only the fields provided in the request body
    if (name) teacher.name = name;
    if (department) teacher.department = department;
    if (experience) teacher.experience = experience;
    if (email) teacher.email = email;

    res.json({ message: "Teacher updated successfully.", teacher });
});

/**
 * DELETE TEACHER BY ID (DELETE)
 * URL: http://localhost:3000/teachers/:id
 */
app.delete("/teachers/:id", (req, res) => {
    const teacherId = parseInt(req.params.id);
    const index = teachers.findIndex(t => t.id === teacherId);

    if (index === -1) {
        return res.status(404).json({ error: "Teacher not found." });
    }

    teachers.splice(index, 1);
    res.json({ message: `Teacher with ID ${teacherId} deleted successfully.` });
});

// --- SERVER START ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`========================================`);
    console.log(`Teacher API is running on port ${PORT}`);
    console.log(`Available endpoints:`);
    console.log(`POST   /teachers`);
    console.log(`GET    /teachers`);
    console.log(`GET    /teachers/:id`);
    console.log(`PUT    /teachers/:id`);
    console.log(`DELETE /teachers/:id`);
    console.log(`========================================`);
});