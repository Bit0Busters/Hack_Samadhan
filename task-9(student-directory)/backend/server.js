const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 2000;

app.use(cors({ origin: "*" }));
app.use(express.json());

let students = [
    { id: 1, name: "Aman", marks: 85, email: "aman@example.com" },
    { id: 2, name: "Riya", marks: 92, email: "riya@example.com" },
    { id: 3, name: "Karan", marks: 78, email: "karan@abc.com" }
];


app.get("/students", (req, res) => {
    res.json(students);
});


app.post("/students", (req, res) => {
    const { name, marks, email } = req.body;
    if (!name || marks == null || !email) {
        return res.status(400).json({ error: "Name, marks, and email are required" });
    }
    const newStudent = {
        id: students.length + 1,
        name,
        marks,
        email,
    };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
