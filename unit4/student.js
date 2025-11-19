// student.js

// An array to store student objects
let students = [];

// Function to add a new student
function addStudent(name, age, marks) {
    const student = { name, age, marks };
    students.push(student);
    console.log(`Student ${name} added successfully.`);
}

// Function to get all students
function getAllStudents() {
    return students;
}

// Export the functions
export { addStudent, getAllStudents };
