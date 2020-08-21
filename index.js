//Core Futaba Dependencies
const Discord = require('discord.js');
const futabaJS = require ('./handler/ClientBuilder.js')
const client = new futabaJS();

//Website Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

require("./handler/module.js")(client);
require("./handler/Event.js")(client);

client.package = require ("./package.json");
client.on("warn", console.warn);
client.on("error", console.error);
client.login(process.env.BOT_TOKEN).catch(console.error);

//Express Website/Server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('public/index.html');
});

app.listen(port, () => console.log(`Express server started successfully`));