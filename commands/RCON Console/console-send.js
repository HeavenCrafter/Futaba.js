const Discord = require("discord.js");
const { Rcon } = require("rcon-client");

exports.run = async (client, message, args) => {
    if (!client.config.owners.includes(message.author.id)) return;

    if (args[0] === "pl") {
        message.channel.send("This commands has been disabled by default.");
    }

    let command = args.slice(0).shift().toLowerCase().join(' ');

    await rcon.send(command)

    const embed = new Discord.MessageEmbed()
    embed.addField('Server Response', response)
    embed.setFooter(`Ping Time > ${client.ws.ping} ms | Executed Command /` + (command))
    message.channel.send(embed)

    message.channel.send("Error occured" + err)
}

exports.help = {
    name: "console-send",
    description: "Sends a command to the connected RCON server",
    usage: "!rcon",
    example: "!rcon tps"
}

exports.conf = {
    aliases: ["rcon", "con"],
    cooldown: 5
}