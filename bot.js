const Discord = require("discord.js");
const client = require("./handler/ClientBuilder.js"); 
const client = new Client()

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

client.on('ready', () => {
  client.channels.cache.get(process.env.STARTUP_CHANNEL).send("**おはよ,** <@694138001273651271>.")
  console.log("Logged in using the token: " + process.env.BOT_TOKEN)
  console.log("Startup channel ID: " + process.env.STARTUP_CHANNEL)
  console.log("Owner ID (Heaven): " + process.env.HEAVEN_ID)

  function randomStatus() {
    let status = ["Discord Bot", "YouTube", "Discord", "Heroku", "Node.js"]
    let rstatus = Math.floor(Math.random() * status.length);

    client.user.setActivity(status[rstatus], { type: "STREAMING", url: "https://www.twitch.tv/chilledcow" });
  }; setInterval(randomStatus, 30000)

  console.log('Online.')
});