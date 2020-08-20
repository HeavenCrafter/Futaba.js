const Discord = require("discord.js");
const futaba = require("./handler/ClientBuilder.js"); 
const client = new futaba()

require("./handler/Module.js")(client);
require("./handler/Event.js")(client);

//Express Dependency
const express = require('express');
const app = express();
const port = 3000;

client.on("message", async message => {
  if (message.content.toLowerCase().startsWith("oreo")) {
    message.react("🥞");
  }
});

client.login(process.env.SECRET).catch(console.error);
app.get('/', (req, res) => res.send('Express server is now online!'));
app.listen(port, () => console.log(`Express server started successfully`));
client.package = require("./package.json");
client.on("warn", console.warn);
client.on("error", console.error); 