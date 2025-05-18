import { useEffect, useState } from "react";

function UserList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://corsproxy.io/?https://student-json-api.netlify.app/db.json")

      .then(res => res.json())
      .then(data => setStudents(data.students))
      .catch(err => console.error("Error loading data:", err));
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((stu, index) => (
          <li key={index}>{stu.name} - {stu.course}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
