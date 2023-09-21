const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());

// Example API route
app.get('/api/data', (req, res) => {
  const data = { message: 'Hello from the server!' };
  res.json(data);
});

// Serve React app (assuming your build is in the 'build' directory)
app.use(express.static('build'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
