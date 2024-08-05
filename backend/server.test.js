const request = require('supertest'); // Library for testing HTTP servers
const express = require('express'); // Express framework for creating the server

const app = express(); // Create Express app for testing
let counter = 0; // Initialize counter variable

app.use(express.json()); // Middleware for parsing JSON requests

// GET endpoint to return current counter value
app.get('/counter', (req, res) => {
  res.json({ counter });
});

// POST endpoint to increment counter value
app.post('/increment', (req, res) => {
  counter++;
  res.json({ counter });
});

describe('Counter API', () => {
  // Test suite for Counter API

  it('should get the initial counter value', async () => {
    // Verify initial counter value is retrievable
    const res = await request(app).get('/counter');
    expect(res.statusCode).toEqual(200); // Check for 200 OK response
    expect(res.body.counter).toEqual(0); // Check initial counter is 0
  });

  it('should increment the counter value', async () => {
    // Verify counter can be incremented
    await request(app).post('/increment'); // Increment counter
    const res = await request(app).get('/counter'); // Retrieve updated counter
    expect(res.body.counter).toEqual(1); // Check counter is incremented to 1
  });
});
