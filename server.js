const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Create a MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root' // Replace with your MySQL username
    password: 'Nikhil@2806' // Replace with your MySQL password
    database: 'farmhouse_calendar'
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// API to fetch events
app.get('/events', (req, res) => {
    const query = 'SELECT * FROM events';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// API to add an event
app.post('/events', (req, res) => {
    const { title, start_date, end_date, description } = req.body;
    const query = 'INSERT INTO events (title, start_date, end_date, description) VALUES (?, ?, ?, ?)';
    db.query(query, [title, start_date, end_date, description], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ id: results.insertId, title, start_date, end_date, description });
    });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});