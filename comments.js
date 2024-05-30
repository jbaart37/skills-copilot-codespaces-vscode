// Create web server
// Create a web server that listens on port 3000. 
// Create a new file, comments.js. In this file, create an array of comments (each comment is a string). 
// Create a route that sends this array to the client at the URL /comments. 
// Create a route that adds a new comment to the array and sends the updated array back to the client at the URL /comments/new. 
// Test that your server works using Postman.

const express = require('express');
const app = express();
const port = 3000;

const comments = ['Hello', 'Hola', 'Bonjour'];

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.get('/comments/new', (req, res) => {
  const newComment = 'New comment';
  comments.push(newComment);
  res.send(comments);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});