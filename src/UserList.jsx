import { useEffect, useState } from "react";

function UserList() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
  fetch("/students.json")
    .then(res => res.json())
    .then(data => setStudents(data.students || []))
    .catch(() => setError("Failed to load students."));
}, []);


  return (
    <div>
      <h2>Student List</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {students.map((s, i) => (
          <li key={i}>{s.name} - {s.course}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
