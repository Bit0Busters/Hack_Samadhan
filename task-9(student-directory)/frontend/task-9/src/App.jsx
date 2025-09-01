import React, { useEffect, useState } from "react";
import "./App.css"; // ✅ import external CSS

export default function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const [email, setEmail] = useState("");

  // Fetch students from backend
  useEffect(() => {
    fetch("http://localhost:2000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  // Add new student
  const addStudent = async (e) => {
    e.preventDefault();
    if (!name.trim() || !marks || !email.trim()) return;

    const res = await fetch("http://localhost:2000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, marks: Number(marks), email }),
    });

    const newStudent = await res.json();
    setStudents([...students, newStudent]);
    setName("");
    setMarks("");
    setEmail("");
  };

  return (
    <div className="page">
      <div className="card">
        <h2>🎓 Student Directory</h2>

        {/* Form */}
        <form onSubmit={addStudent} className="form">
          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Marks"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Add Student</button>
        </form>

        {/* Students List */}
        <ul className="list">
          {students.map((s) => (
            <li key={s.id} className="list-item">
              <b>{s.name}</b> — {s.marks} marks — {s.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
