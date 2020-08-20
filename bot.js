const { Client, Collection } = require("discord.js");
const { prefix } = require("./config.json")
const client = new Client()

client.commands = new Collection();
client.aliases = new Collection();

//Express Dependency
const express = require('express');
const app = express();
const port = 3000;

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.member) message.member = await message.guild.fetchMember(message);
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (command)
    command.run(client, message, args);
});

client.on("message", async message => {
  if (message.content.toLowerCase().startsWith("oreo")) {
    message.react("🥞");
  }
});

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

client.login(process.env.BOT_TOKEN);
app.get('/', (req, res) => res.send('Express server is now online!'));
app.listen(port, () => console.log(`Express server started successfully`));