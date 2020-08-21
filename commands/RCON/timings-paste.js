const Discord = require("discord.js");
const { Rcon } = require("rcon-client");

exports.run = async (client, message) => {
    if (!client.config.owners.includes(message.author.id)) return;

    let sender = message.author;

    console.log(`${sender.tag} ${sender.ID} pasting a timing check.`) + message.channel.send(`Stopping and Pasting the (if any) on-going timing check.`)

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
    }

    rcon.end()
}


exports.help = {
    name: "timings-paste",
    description: "Stops and paste a timings check on the connected RCON server",
    usage: "!timings-paste",
    example: "!timings-paste"
}

exports.conf = {
    aliases: ["tms-paste", "tm-paste", "tms-pt", "tm-pt"],
    cooldown: 5
}