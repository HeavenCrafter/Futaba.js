const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    message.channel.send("Pong! Test Succeeded.");
}

exports.help = {
    name: "ping",
    description: "A test command!",
    usage: "/ping",
    example: "/ping"
};

exports.conf = {
    aliases: ["beep"],
    cooldown: 1
}