const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    message.channel.send("<:serveroffline:717160605638983730> もうすこしまって.").then((sentMessage) => sentMessage.edit("<:serveronline:717160605257171058> どうぞ `" + `${client.ws.ping}` + " ms`"))
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