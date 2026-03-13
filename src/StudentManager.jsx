import { useState } from "react";

function StudentManager() {

  const [students, setStudents] = useState([
    { id: 1, name: "Kiran", course: "React" },
    { id: 2, name: "Mohith", course: "Java" },
    { id: 3, name: "Chaithu", course: "Python" },
    { id: 4, name: "Dhinesh", course: "NodeJS" },
    { id: 5, name: "Santhosh", course: "AWS" },
    { id: 6, name: "Razak", course: "Mern Stack" },
    { id: 7, name: "Raghu", course: "Python Full stack" }
  ]);

  const [newStudent, setNewStudent] = useState({
    id: "",
    name: "",
    course: ""
  });

  const handleChange = (e) => {
    setNewStudent({
      ...newStudent,
      [e.target.name]: e.target.value
    });
  };

  const addStudent = () => {
    setStudents([...students, newStudent]);

    setNewStudent({
      id: "",
      name: "",
      course: ""
    });
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div style={{padding:"20px"}}>

      <h2>Student Manager</h2>

      <input
        type="text"
        name="id"
        placeholder="ID"
        value={newStudent.id}
        onChange={handleChange}
      />

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={newStudent.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="course"
        placeholder="Course"
        value={newStudent.course}
        onChange={handleChange}
      />

      <button onClick={addStudent}>Add Student</button>

      <h3>Student List</h3>

      {students.length === 0 ? (
        <p>No students available</p>
      ) : (
        <table border="1" cellPadding="10">

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>
                  <button onClick={() => deleteStudent(student.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      )}

    </div>
  );
}

export default StudentManager;