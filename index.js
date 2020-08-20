const Discord = require('discord.js');
const futabaJS = require ('./handler/ClientBuilder.js')
const client = new futabaJS();

require("./handler/module.js")(client);
require("./handler/Event.js")(client);

client.package = require ("./package.json");
client.on("warn", console.warn);
client.on("error", console.error);
client.login(process.env.BOT_TOKEN).catch(console.error);

client.on("message", async message => {
    if (message.content.toLowerCase().startsWith("oreo")) {
        message.react("🥞");
    }
});