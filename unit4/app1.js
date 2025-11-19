const student = require('./student');
const marks = require('./marks');

student.addStudent(1,'john',[85,90,88]);
student.addStudent(2,'rahul',[75,80,98]);
student.addStudent(3,'sneha',[89,60,88]);

const students = student.getAllStudents();

console.log("Student Details ");
students.forEach((stu)=>{
    const total=marks.calculateTotal(stu.marks);
    const grade=marks.calculateGrade(total);
    console.log(`Name: ${stu.name}, Age: ${stu.age}, Marks: ${stu.marks}, Total: ${total}, Grade: ${grade}`);
});


