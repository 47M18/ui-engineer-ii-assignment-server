const fs = require('node:fs');
const cors = require('cors');
const express = require('express');
const app = express();
const port = 3055;

app.use(cors({
  origin: 'https://uie2-client.onrender.com'
}))

app.get('/', (_req, res) => {
  res.send('Hello World!')
});

app.get('/api/items', (_req, res) => {
  fs.readFile('./public/UIE-InterviewProject.json', 'utf-8', (_e, data) => {
    res.json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})