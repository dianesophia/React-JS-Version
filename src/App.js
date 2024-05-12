  import React, { useState, useEffect } from 'react';
  import './App.css';

  {/*function App() {
    const [students, setStudents] = useState([]);
    const [editingStudentId, setEditingStudentId] = useState(null);

    useEffect(() => {
      fetchStudents();
    }, []);

    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:5432/students");
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
        const formData = new FormData(e.target);
        const response = await fetch("http://localhost:5432/students", {
          method: 'POST',
          body: formData
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
        const response = await fetch(`http://localhost:5432/students/${id}`, {
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

    const handleUpdate = async (id, updatedData) => {
      try {
        const response = await fetch(`http://localhost:5432/students/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedData)
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
        await handleUpdate(id, updatedData);
        setEditingStudentId(null);
      } catch (error) {
        console.error("Error saving edit:", error);
      }
    };

    const handleCancelEdit = () => {
      setEditingStudentId(null);
    };

    const handleInputChange = (e, field, id) => {
      const value = e.target.value;
      setStudents(prevStudents =>
        prevStudents.map(student => {
          if (student.id === id) {
            return { ...student, [field]: value };
          }
          return student;
        })
      );
    };

    const renderInputOrText = (id, field, value) => {
      return (
        <input
          type="text"
          value={value}
          onChange={(e) => handleInputChange(e, field, id)}
        />
      );
    };

    return (
      <div className="container">
        <h1>Student List</h1>
        <form onSubmit={handleSubmit} className="form-input">
          <input type="text" name="idno" placeholder="ID Number" />
          <input type="text" name="lastname" placeholder="Last Name" />
          <input type="text" name="firstname" placeholder="First Name" />
          <input type="text" name="course" placeholder="Course" />
          <input type="text" name="level" placeholder="Level" />
          <button type="submit">Add Student</button>
        </form>
        <div className="table-container">
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
                  <td>{editingStudentId === student.id ? renderInputOrText(student.id, 'idno', student.idno) : student.idno}</td>
                  <td>{editingStudentId === student.id ? renderInputOrText(student.id, 'lastname', student.lastname) : student.lastname}</td>
                  <td>{editingStudentId === student.id ? renderInputOrText(student.id, 'firstname', student.firstname) : student.firstname}</td>
                  <td>{editingStudentId === student.id ? renderInputOrText(student.id, 'course', student.course) : student.course}</td>
                  <td>{editingStudentId === student.id ? renderInputOrText(student.id, 'level', student.level) : student.level}</td>
                  <td> c
                    {editingStudentId === student.id ? (
                      <>
                        <button onClick={() => handleSaveEdit(student.id, student)} className="edit-btn">Save</button>
                        <button onClick={handleCancelEdit}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleDelete(student.id)}>Delete</button>
                        <button onClick={() => handleEdit(student.id)} className="edit-btn">Edit</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  export default App;
  */}
{/*
  function App() {
    const [students, setStudents] = useState([]);
    const [editingStudentId, setEditingStudentId] = useState(null);
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
      fetchStudents();
    }, []);

    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:5432/students");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    const handleEdit = (id) => {
      setEditingStudentId(id);
    };

    const handleSaveEdit = async (id, updatedData) => {
      try {
        await handleUpdate(id, updatedData);
        setEditingStudentId(null);
      } catch (error) {
        console.error("Error saving edit:", error);
      }
    };

    const handleCancelEdit = () => {
      setEditingStudentId(null);
    };

    const handleUpdate = async (id, updatedData) => {
      try {
        const response = await fetch(`http://localhost:5432/students/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedData)
        });
        if (!response.ok) {
          throw new Error("Failed to update student");
        }
        fetchStudents(); // Refresh student list
      } catch (error) {
        console.error("Error updating student:", error);
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const formData = new FormData(e.target);
        formData.append('photo', photo);
        const response = await fetch("http://localhost:5432/students", {
          method: 'POST',
          body: formData
        });
        if (!response.ok) {
          throw new Error("Failed to add student");
        }
        fetchStudents();
      } catch (error) {
        console.error("Error adding student:", error);
      }
    };

    const handleDelete = async (id) => {
      try {
        const response = await fetch(`http://localhost:5432/students/${id}`, {
          method: 'DELETE'
        });
        if (!response.ok) {
          throw new Error("Failed to delete student");
        }
        fetchStudents();
      } catch (error) {
        console.error("Error deleting student:", error);
      }
    };

    const handleCapturePhoto = () => {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          const video = document.createElement('video');
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          video.srcObject = stream;
          video.onloadedmetadata = () => {
            video.play();
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const dataUrl = canvas.toDataURL('image/png');
            setPhoto(dataUrl);
            stream.getTracks().forEach(track => track.stop());
          };
        })
        .catch((error) => {
          console.error("Error accessing webcam:", error);
        });
    };

    const renderInputOrText = (id, field, value) => {
      return (
        <input
          type="text"
          value={value}
          onChange={(e) => handleInputChange(e, field, id)}
        />
      );
    };

    const handleInputChange = (e, field, id) => {
      const value = e.target.value;
      setStudents(prevStudents =>
        prevStudents.map(student => {
          if (student.id === id) {
            return { ...student, [field]: value };
          }
          return student;
        })
      );
    };

    return (
      <div className="container">
        <h1>Student List</h1>
        <form onSubmit={handleSubmit} className="form-input" encType="multipart/form-data"> 
        <input type="text" name="idno" placeholder="ID Number" />
        <input type="text" name="lastname" placeholder="Last Name" />
        <input type="text" name="firstname" placeholder="First Name" />
        <input type="text" name="course" placeholder="Course" />
        <input type="text" name="level" placeholder="Level" />
        <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} /> 
        {photo && <img src={URL.createObjectURL(photo)} alt="Student" />} 


        <button type="submit">Add Student</button>
      </form>
        <div className="table-container">
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
                  <td>{editingStudentId === student.id ? renderInputOrText(student.id, 'idno', student.idno) : student.idno}</td>
                  <td>{editingStudentId === student.id ? renderInputOrText(student.id, 'lastname', student.lastname) : student.lastname}</td>
                  <td>{editingStudentId === student.id ? renderInputOrText(student.id, 'firstname', student.firstname) : student.firstname}</td>
                  <td>{editingStudentId === student.id ? renderInputOrText(student.id, 'course', student.course) : student.course}</td>
                  <td>{editingStudentId === student.id ? renderInputOrText(student.id, 'level', student.level) : student.level}</td>
                  <td>
                    {editingStudentId === student.id ? (
                      <>
                        <button onClick={() => handleSaveEdit(student.id, student)} className="edit-btn">Save</button>
                        <button onClick={handleCancelEdit}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleDelete(student.id)}>Delete</button>
                        <button onClick={() => handleEdit(student.id)} className="edit-btn">Edit</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  export default App;

*/}



function App() {
  const [students, setStudents] = useState([]);
  const [editingStudentId, setEditingStudentId] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:5432/students");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleEdit = (id) => {
    setEditingStudentId(id);
  };

  const handleSaveEdit = async (id, updatedData) => {
    try {
      await handleUpdate(id, updatedData);
      setEditingStudentId(null);
    } catch (error) {
      console.error("Error saving edit:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditingStudentId(null);
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      const response = await fetch(`http://localhost:5432/students/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      });
      if (!response.ok) {
        throw new Error("Failed to update student");
      }
      fetchStudents(); // Refresh student list
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      if (photo instanceof File) {
        formData.append('photo', photo);
      } else if (typeof photo === 'string') {
        // Convert data URL to Blob
        const blob = await fetch(photo).then((res) => res.blob());
        formData.append('photo', blob);
      }
      const response = await fetch("http://localhost:5432/students", {
        method: 'POST',
        body: formData
      });
      if (!response.ok) {
        throw new Error("Failed to add student");
      }
      fetchStudents();
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };
  

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5432/students/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error("Failed to delete student");
      }
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleCapturePhoto = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        const video = document.createElement('video');
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        video.srcObject = stream;
        video.onloadedmetadata = () => {
          video.play();
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const dataUrl = canvas.toDataURL('image/png');
          setPhoto(dataUrl);
          stream.getTracks().forEach(track => track.stop());
        };
      })
      .catch((error) => {
        console.error("Error accessing webcam:", error);
      });
  };

  const renderInputOrText = (id, field, value) => {
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e, field, id)}
      />
    );
  };

  const handleInputChange = (e, field, id) => {
    const value = e.target.value;
    setStudents(prevStudents =>
      prevStudents.map(student => {
        if (student.id === id) {
          return { ...student, [field]: value };
        }
        return student;
      })
    );
  };

  return (
    <div className="container">
      <h1>Student List</h1>
      <form onSubmit={handleSubmit} className="form-input" encType="multipart/form-data"> {/* Use encType for file uploads */}
        <input type="text" name="idno" placeholder="ID Number" />
        <input type="text" name="lastname" placeholder="Last Name" />
        <input type="text" name="firstname" placeholder="First Name" />
        <input type="text" name="course" placeholder="Course" />
        <input type="text" name="level" placeholder="Level" />
        <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} /> {/* Input for uploading image */}
        {photo && <img src={URL.createObjectURL(photo)} alt="Student" />} {/* Display the selected photo */}
        <button type="button" onClick={handleCapturePhoto}>Capture Photo</button>
        <button type="submit">Add Student</button>
      </form>
      <div className="table-container">
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
                <td>{editingStudentId === student.id ? renderInputOrText(student.id, 'idno', student.idno) : student.idno}</td>
                <td>{editingStudentId === student.id ? renderInputOrText(student.id, 'lastname', student.lastname) : student.lastname}</td>
                <td>{editingStudentId === student.id ? renderInputOrText(student.id, 'firstname', student.firstname) : student.firstname}</td>
                <td>{editingStudentId === student.id ? renderInputOrText(student.id, 'course', student.course) : student.course}</td>
                <td>{editingStudentId === student.id ? renderInputOrText(student.id, 'level', student.level) : student.level}</td>
                <td>
                  {editingStudentId === student.id ? (
                    <>
                      <button onClick={() => handleSaveEdit(student.id, student)} className="edit-btn">Save</button>
                      <button onClick={handleCancelEdit}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleDelete(student.id)}>Delete</button>
                      <button onClick={() => handleEdit(student.id)} className="edit-btn">Edit</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
