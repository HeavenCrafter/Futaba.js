const Discord = require("discord.js");
const { Rcon } = require("rcon-client");

exports.run = async (client, message) => {
    if (!client.config.owners.includes(message.author.id)) return;

    let sender = message.author;

    console.log(`${sender.tag} ${sender.ID} pasting a timing report.`) + message.channel.send(`Sending a timing report`)

    const rcon = new Rcon({ host: process.env.RCON_ADDRESS, port: process.env.RCON_PORT, password: process.env.RCON_PASSWORD })

    rcon.on("connect", () => console.log("Connected"))
    rcon.on("authenticated", () => console.log("Authenticated"))
    rcon.on("end", () => console.log("Disconnected"))

    await rcon.connect()

    let responses = await Promise.all([
        rcon.send("timings report"),
    ])

    for (response of responses) {
        console.log(response)
        message.channel.send(`*Console* > ` + response)
        message.channel.send(`Estimated time took to ran command: ${client.ws.ping} ms`)
    }

    rcon.end()
}


exports.help = {
    name: "timings-report",
    description: "Sends a quick and short timings report",
    usage: "!timings-report",
    example: "!timings-report"
}

exports.conf = {
    aliases: ["tms-rp", "tm-rp", "tms-report", "tm-report", "tms-rep", "tm-rep"],
    cooldown: 60
}