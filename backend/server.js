const express = require('express'); // Express framework for creating the server
const cors = require('cors'); // Middleware to enable CORS

const app = express(); // Initialize Express app

let counter = 0; // Current counter value
let history = []; // Stores timestamps of last 5 increments

app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON request bodies

// GET endpoint to return current counter value
app.get('/counter', (req, res) => {
  res.json({ counter });
});

// POST endpoint to increment counter and update history
app.post('/increment', (req, res) => {
  counter++;
  history.push(new Date().toISOString());
  if (history.length > 5) history.shift(); // Keep last 5 timestamps
  res.json({ counter });
});

// Start server on specified port (default to 4000)
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
