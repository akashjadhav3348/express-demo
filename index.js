// Import express
const express = require('express');
const app = express();

// Set up a simple route
app.get('/', (req, res) => {
  res.send('Hello, Akash! Welcome to your Node.js application.');
  
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Hello World!`);
});
