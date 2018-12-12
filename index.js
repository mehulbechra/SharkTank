// Dependencies
const express = require('express');
const path = require('path');
const mysql = require('mysql');

// Initialization
const app = express();

// Connect to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'sharktank',
});

db.connect((err) => {
  if (err) {
    console.log('Could not connect to database');
  } else {
    console.log('Database connected...');
  }
});

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
