const Discord = require("discord.js");
const { Rcon } = require("rcon-client");

exports.run = async (client, message, args) => {
    if (!client.config.owners.includes(message.author.id)) return;

    if (args[0] === "pl") {
        message.channel.send("This commands has been disabled by default.");

    } else {

        let command = args.slice().join(' ');

        const rcon = new Rcon({ host: process.env.RCON_ADDRESS, port: process.env.RCON_PORT, password: process.env.RCON_PASSWORD })

        await rcon.connect()

        let responses = await Promise.all([
            rcon.send(command),
        ])

        for (response of responses) {
            
            const embed = new Discord.MessageEmbed()
            embed.addField('Server Response', response)
            embed.setFooter(`Ping Time > ${client.ws.ping} ms | Executed Command /${args}`)

            message.channel.send(embed)

            rcon.end()
        }
    }
}


exports.help = {
    name: "Console Send",
    description: "Sends a command to the connected RCON server",
    usage: "!rcon",
    example: "!rcon tps"
}

exports.conf = {
    aliases: ["rcon", "con"],
    cooldown: 5
}