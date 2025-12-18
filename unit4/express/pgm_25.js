const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// --- MongoDB Connection ---
// Added error handling for the initial connection
mongoose.connect("mongodb://127.0.0.1:27017/CourseDB")
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// --- Course Schema ---
const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  faculty: { type: String, required: true },
  credits: { type: Number, required: true },
  studentsEnrolled: { type: Number, required: true }
});

const Course = mongoose.model("Course", courseSchema);

// --- ROUTES ---

/**
 * 1. TOTAL STUDENTS AGGREGATION
 * IMPORTANT: This must be placed BEFORE any /:id routes
 */
app.get("/courses/stats/total-students", async (req, res) => {
  try {
    const courses = await Course.find(); // 1. Get all courses from DB
    
    // 2. Use JavaScript to add them up
    const total = courses.reduce((sum, course) => sum + course.studentsEnrolled, 0);
    
    res.json({ totalStudents: total });
  } catch (error) {
    res.status(500).json({ error: "Could not calculate total" });
  }
});
/**
 * 2. CREATE A COURSE
 */
app.post("/courses", async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json({ message: "Course added successfully", course });
  } catch (error) {
    res.status(400).json({ message: "Validation Error", error: error.message });
  }
});

/**
 * 3. READ ALL COURSES
 */
app.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch courses" });
  }
});

/**
 * 4. UPDATE A COURSE BY ID
 */
app.put("/courses/:id", async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // runValidators ensures updated data follows the schema
    );

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json({ message: "Course updated successfully", course });
  } catch (error) {
    res.status(400).json({ message: "Update failed", error: error.message });
  }
});

/**
 * 5. DELETE A COURSE BY ID
 */
app.delete("/courses/:id", async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Delete operation failed" });
  }
});

// --- Server Startup ---
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});