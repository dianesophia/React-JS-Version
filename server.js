{/*require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5432;

const mysql = require("mysql");
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    multipleStatements: true
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());



app.get("/students", (req, res) => {
    let sql = "SELECT * FROM `students`";
    db.query(sql,(err, result, fields) => {
        if(err){
            console.log("Query Error");
            res.status(500).json(err);
        }
        res.status(200).json(result);
    });
});

app.get("/students/:idno", (req, res) => {
    let id = req.params.idno;
    let sql = "SELECT * FROM `students` WHERE `id`=?";
    db.query(sql, id, (err, results, fields) => {
      if (err) {
        console.log("Query Error");
        res.status(500).json(err);
      }
      res.status(200).json(results);
    });
  });


  app.delete("/students/:id", (req, res) => {
    let id = req.params.id;
    let sql = "DELETE FROM `students` WHERE `id`=?";
    db.query(sql, id, (err, results, fields) => {
      if (err) {
        console.log("Query Error");
        res.status(500).json(err);
        return;
      }
      let resetSql = "ALTER TABLE students AUTO_INCREMENT = 1";
      db.query(resetSql, (resetErr, resetResults, resetFields) => {
        if (resetErr) {
          console.log("Reset Error");
          res.status(500).json(resetErr);
          return;
        }
        res.status(200).json(results);
      });
    });
  });

  
app.post("/students", (req, res) => {
    let data = req.body;
    console.log("Received data:", data);
    let sql = "INSERT INTO `students`(`idno`, `lastname`, `firstname`, `course`, `level`) VALUES (?, ?, ?, ?, ?)"; 
    let values = [data.idno, data.lastname, data.firstname, data.course, data.level]; 
    db.query(sql, values, (err, results, fields) => {
      if (err) {
        console.log("Query Error:", err);
        // Log the error but still return a success response
        res.status(201).json({ message: "Duplicate entry but added successfully" });
      } else {
        console.log("Insertion successful:", results);
        res.status(201).json(results);
      }
    });
  });

  app.put("/students/:id", (req, res) => {
    const id = req.params.id;
    const { idno, lastname, firstname, course, level } = req.body;
    const sql = "UPDATE students SET idno = ?, lastname = ?, firstname = ?, course = ?, level = ? WHERE id = ?";
    const values = [idno, lastname, firstname, course, level, id];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.log("Query Error:", err);
            res.status(500).json({ error: "Failed to update student" });
        } else {
            console.log("Update successful:", result);
            res.status(200).json({ message: "Student updated successfully" });
        }
    });
});

app.listen(port, () => {
    console.log(`listening at port ${port}`);
  });
*/}

{/*
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const multer = require("multer");
const port = process.env.PORT || 5432;

const mysql = require("mysql");
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    multipleStatements: true
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/students", (req, res) => {
    let sql = "SELECT * FROM `students`";
    db.query(sql, (err, result, fields) => {
        if (err) {
            console.log("Query Error");
            res.status(500).json(err);
        }
        res.status(200).json(result);
    });
});

app.get("/students/:idno", (req, res) => {
    let id = req.params.idno;
    let sql = "SELECT * FROM `students` WHERE `id`=?";
    db.query(sql, id, (err, results, fields) => {
        if (err) {
            console.log("Query Error");
            res.status(500).json(err);
        }
        res.status(200).json(results);
    });
});


app.delete("/students/:id", (req, res) => {
    let id = req.params.id;
    let sql = "DELETE FROM `students` WHERE `id`=?";
    db.query(sql, id, (err, results, fields) => {
        if (err) {
            console.log("Query Error");
            res.status(500).json(err);
            return;
        }
        let resetSql = "ALTER TABLE students AUTO_INCREMENT = 1";
        db.query(resetSql, (resetErr, resetResults, resetFields) => {
            if (resetErr) {
                console.log("Reset Error");
                res.status(500).json(resetErr);
                return;
            }
            res.status(200).json(results);
        });
    });
});


app.post("/students", (req, res) => {
    let { idno, lastname, firstname, course, level, img } = req.body;
    let sql = "INSERT INTO `students`(`idno`, `lastname`, `firstname`, `course`, `level`, `img`) VALUES (?, ?, ?, ?, ?, ?)";
    let values = [idno, lastname, firstname, course, level, img];
    db.query(sql, values, (err, results, fields) => {
        if (err) {
            console.log("Query Error:", err);
            res.status(500).json({ error: "Failed to add student" });
        } else {
            console.log("Insertion successful:", results);
            res.status(201).json(results);
        }
    });
});


app.put("/students/:id", (req, res) => {
    const id = req.params.id;
    const { idno, lastname, firstname, course, level, img } = req.body;
    const sql = "UPDATE students SET idno = ?, lastname = ?, firstname = ?, course = ?, level = ?, img = ? WHERE id = ?";
    const values = [idno, lastname, firstname, course, level, img, id];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.log("Query Error:", err);
            res.status(500).json({ error: "Failed to update student" });
        } else {
            console.log("Update successful:", result);
            res.status(200).json({ message: "Student updated successfully" });
        }
    });
});

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});*/}


require("dotenv").config();

const express = require("express");
const cors = require("cors");
const multer = require("multer"); // Import multer for handling file uploads
const app = express();
const port = process.env.PORT || 7000;

const mysql = require("mysql");
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    multipleStatements: true
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Configure multer to handle file uploads
const upload = multer({ dest: 'uploads/' }); // Destination folder for storing uploaded files



app.get("/students", (req, res) => {
    let sql = "SELECT * FROM `students`";
    db.query(sql, (err, result, fields) => {
        if (err) {
            console.log("Query Error");
            res.status(500).json(err);
        }
        res.status(200).json(result);
    });
});
{/*
app.get("/students/:idno", (req, res) => {
    let id = req.params.idno;
    let sql = "SELECT * FROM `students` WHERE `id`=?";
    db.query(sql, id, (err, results, fields) => {
        if (err) {
            console.log("Query Error");
            res.status(500).json(err);
        }
        res.status(200).json(results);
    });
});

*/}


app.get("/students", (req, res) => {
    let sql = "SELECT id, idno, lastname, firstname, course, level, img FROM students";
    db.query(sql, (err, result, fields) => {
        if (err) {
            console.log("Query Error");
            res.status(500).json(err);
        }
        res.status(200).json(result);
    });
});

app.delete("/students/:id", (req, res) => {
    let id = req.params.id;
    let sql = "DELETE FROM `students` WHERE `id`=?";
    db.query(sql, id, (err, results, fields) => {
        if (err) {
            console.log("Query Error");
            res.status(500).json(err);
            return;
        }
        let resetSql = "ALTER TABLE students AUTO_INCREMENT = 1";
        db.query(resetSql, (resetErr, resetResults, resetFields) => {
            if (resetErr) {
                console.log("Reset Error");
                res.status(500).json(resetErr);
                return;
            }
            res.status(200).json(results);
        });
    });
});

app.post("/students", upload.single('photo'), (req, res) => {
    try {
        const { idno, lastname, firstname, course, level } = req.body;
        const imgPath = req.file ? req.file.path : null; // Get the path of the uploaded image
        const imgData = imgPath ? fs.readFileSync(imgPath) : null; // Read image data
        const sql = "INSERT INTO `students`(`idno`, `lastname`, `firstname`, `course`, `level`, `img`) VALUES (?, ?, ?, ?, ?, ?)";
        const values = [idno, lastname, firstname, course, level, imgData];
        
        db.query(sql, values, (err, results, fields) => {
            if (err) {
                console.log("Query Error:", err);
                res.status(500).json({ error: "Failed to add student" });
            } else {
                console.log("Insertion successful:", results);
                res.status(201).json(results);
            }
        });
    } catch (error) {
        console.error("Error adding student:", error);
        res.status(500).json({ error: "Failed to add student" });
    } finally {
        // Delete the temporary file after reading its content
        if (imgPath) {
            fs.unlinkSync(imgPath);
        }
    }
});

app.put("/students/:id", upload.single('photo'), (req, res) => {
    const id = req.params.id;
    const { idno, lastname, firstname, course, level } = req.body;
    let img = req.file ? req.file.filename : null; // Get the filename of the uploaded image
    const sql = "UPDATE students SET idno = ?, lastname = ?, firstname = ?, course = ?, level = ?, img = ? WHERE id = ?";
    const values = [idno, lastname, firstname, course, level, img, id];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.log("Query Error:", err);
            res.status(500).json({ error: "Failed to update student" });
        } else {
            console.log("Update successful:", result);
            res.status(200).json({ message: "Student updated successfully" });
        }
    });
});


app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});
