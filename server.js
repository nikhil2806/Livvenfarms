const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');

// Middleware setup
app.use(cors());
app.use(express.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Nikhil@2806',
  database: 'farmhouse_calendar'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Create the database if it doesn't exist
db.query('CREATE DATABASE IF NOT EXISTS farmhouse_calendar', (err, result) => {
  if (err) {
    console.error('Error creating database:', err);
    return;
  }
  console.log('Database created or already exists');
});

// Define your routes here
app.get('/api/events', (req, res) => {
  // Your route logic here
});

app.post('/api/events', (req, res) => {
  // Your route logic here
});

// Export the app for testing
module.exports = app;

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const request = require('supertest');
const { expect } = require('chai');

describe('GET /api/events', () => {
    it('should return all events', async () => {
        const res = await request(app).get('/api/events');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
    });
});

describe('POST /api/events', () => {
    it('should create a new event', async () => {
        const newEvent = {
            title: 'Test Event',
            start: '2023-10-25',
            end: '2023-10-27',
            description: 'This is a test event'
        };
        const res = await request(app)
            .post('/api/events')
            .send(newEvent);
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('id');
        expect(res.body.title).to.equal(newEvent.title);
    });
});