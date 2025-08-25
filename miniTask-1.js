function printStudentDetails(student) {
    console.log("Student Details:");
    for (let key in student) {
        console.log(`${key}: ${student[key]}`);
    }
}


let student1 = {
    name: "Aashay Jain",
    age: 21,
    course: "B.Tech",
    rollNo: 12345
};

printStudentDetails(student1);
