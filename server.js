//Website Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//Express Website/Server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('public/index.html');
});

app.listen(port, () => console.log(`Express server started successfully`));