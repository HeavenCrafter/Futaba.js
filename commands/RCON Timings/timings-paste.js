const Discord = require("discord.js");
const { Rcon } = require("rcon-client");

exports.run = async (client, message) => {
    if (!client.config.owners.includes(message.author.id)) return;

    let sender = message.author;

    console.log(`${sender.tag} pasting a timing check.`) + message.channel.send(`Stopping and Pasting the (if any) on-going timing check.`)

    const rcon = new Rcon({ host: process.env.RCON_ADDRESS, port: process.env.RCON_PORT, password: process.env.RCON_PASSWORD })

    rcon.on("connect", () => console.log("Connected"))
    rcon.on("authenticated", () => console.log("Authenticated"))
    rcon.on("end", () => console.log("Disconnected"))

    await rcon.connect()

    let responses = await Promise.all([
        rcon.send("timings paste"),
    ])

    for (response of responses) {
        console.log(response)
        message.channel.send(`*Console* > ` + response)
        message.channel.send(`Estimated time took to ran command: ${client.ws.ping} ms`)
        if(process.env.CHANNEL_LOG) {
            console.log(`Logged to channel: ` + process.env.CHANNEL_LOG)
            const embed = new Discord.MessageEmbed()
            embed.setDescription('Timings report completed.')
            embed.addField('Time took to ran', `${client.ws.ping} ms`)
            embed.addField('Response', response)
            embed.setTimestamp()
            client.channels.cache.get(process.env.CHANNEL_LOG).send(embed)
        } else {
            console.log(`The CHANNEL_LOG .env variable is not set, will not be logging any timings.`);
        }
    }

    rcon.end()
}


exports.help = {
    name: "Timings-Paste",
    description: "Stops and paste (if any) timings check on the connected RCON server",
    usage: "!timings-paste",
    example: "!timings-paste"
}

exports.conf = {
    aliases: ["tms-paste", "tm-paste", "tms-pt", "tm-pt"],
    cooldown: 5
}