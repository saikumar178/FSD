// marks.js

// Function to calculate total marks
function calculateTotal(marks) {
    // Adds up all marks in the array
    return marks.reduce((total, mark) => total + mark, 0);
}

// Function to calculate grade based on total marks
function calculateGrade(total) {
    const average = total / 3; // assuming 3 subjects per student

    if (average >= 90) return 'A+';
    else if (average >= 80) return 'A';
    else if (average >= 70) return 'B';
    else if (average >= 60) return 'C';
    else return 'F';
}

// Export the functions
export { calculateTotal, calculateGrade };
