import React, { useState, useEffect } from 'react';
import './App.css';

function Home() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    idno: '',
    lastname: '',
    firstname: '',
    course: '',
    level: ''
  });
  const [editingStudentId, setEditingStudentId] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:4321/students");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4321/students", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Failed to add student");
      }
      fetchStudents(); // Refresh student list
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4321/students/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error("Failed to delete student");
      }
      fetchStudents(); // Refresh student list
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const studentToUpdate = students.find(student => student.id === id);
      const response = await fetch(`http://localhost:4321/students/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(studentToUpdate)
      });
      if (!response.ok) {
        throw new Error("Failed to update student");
      }
      fetchStudents(); // Refresh student list
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  const handleEdit = (id) => {
    setEditingStudentId(id);
  };

  const handleSaveEdit = async (id, updatedData) => {
    try {
      const response = await fetch(`http://localhost:4321/students/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      });
      if (!response.ok) {
        throw new Error("Failed to save edit");
      }
      setEditingStudentId(null);
      fetchStudents(); // Refresh student list
    } catch (error) {
      console.error("Error saving edit:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditingStudentId(null);
  };

  const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Student List</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="ID Number" value={formData.idno} onChange={(e) => handleInputChange(e, 'idno')} />
          <input type="text" placeholder="Last Name" value={formData.lastname} onChange={(e) => handleInputChange(e, 'lastname')} />
          <input type="text" placeholder="First Name" value={formData.firstname} onChange={(e) => handleInputChange(e, 'firstname')} />
          <input type="text" placeholder="Course" value={formData.course} onChange={(e) => handleInputChange(e, 'course')} />
          <input type="text" placeholder="Level" value={formData.level} onChange={(e) => handleInputChange(e, 'level')} />
          <button type="submit">Add Student</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>ID Number</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Course</th>
              <th>Level</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{editingStudentId === student.id ? <input type="text" value={student.idno} onChange={(e) => handleInputChange(e, 'idno')} /> : student.idno}</td>
                <td>{editingStudentId === student.id ? <input type="text" value={student.lastname} onChange={(e) => handleInputChange(e, 'lastname')} /> : student.lastname}</td>
                <td>{editingStudentId === student.id ? <input type="text" value={student.firstname} onChange={(e) => handleInputChange(e, 'firstname')} /> : student.firstname}</td>
                <td>{editingStudentId === student.id ? <input type="text" value={student.course} onChange={(e) => handleInputChange(e, 'course')} /> : student.course}</td>
                <td>{editingStudentId === student.id ? <input type="text" value={student.level} onChange={(e) => handleInputChange(e, 'level')} /> : student.level}</td>
                <td>
                  {editingStudentId === student.id ? (
                    <>
                      <button onClick={() => handleSaveEdit(student.id, formData)}>Save</button>
                      <button onClick={handleCancelEdit}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleDelete(student.id)}>Delete</button>
                      <button onClick={() => handleEdit(student.id)}>Edit</button>
                      <button onClick={() => handleUpdate(student.id)}>Update</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default Home;
