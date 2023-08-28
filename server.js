const express = require('express');
const fs = require('node:fs');
const app = express();
const port = 3055;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/api/items', (req, res) => {
  fs.readFile('./public/UIE-InterviewProject.json', 'utf-8', (e, data) => {
    res.json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})