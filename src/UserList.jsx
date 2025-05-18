import { useEffect, useState } from "react";

function UserList() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://corsproxy.io/?https://student-json-api.netlify.app/db.json")
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log("Fetched data:", data);
        if (data.students) {
          setStudents(data.students);
        } else {
          setError("No students found in response.");
        }
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setError("Failed to load students. See console for details.");
      });
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {students.map((stu, index) => (
          <li key={index}>{stu.name} - {stu.course}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
