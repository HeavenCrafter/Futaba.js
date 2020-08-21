const Discord = require("discord.js");
const { Rcon } = require("rcon-client");

exports.run = async (client, message) => {
    if (!client.config.owners.includes(message.author.id)) return;

    let sender = message.author;

    console.log(`${sender.tag} ${sender.ID} stopped a timing check.`) + message.channel.send(`Stopping the (if any) on-going timing check.`)

    const rcon = new Rcon({ host: process.env.RCON_ADDRESS, port: process.env.RCON_PORT, password: process.env.RCON_PASSWORD })

    rcon.on("connect", () => console.log("Connected"))
    rcon.on("authenticated", () => console.log("Authenticated"))
    rcon.on("end", () => console.log("Disconnected"))

    await rcon.connect()

    let responses = await Promise.all([
        rcon.send("timings off"),
    ])

    for (response of responses) {
        console.log(response)
        message.channel.send(`*Console* > ` + response)
        message.channel.send(`Estimated time took to ran command: ${client.ws.ping} ms`)
    }

    rcon.end()
}


exports.help = {
    name: "timings-off",
    description: "Stops a timings check on the connected RCON server",
    usage: "!timings-off",
    example: "!timings-off"
}

exports.conf = {
    aliases: ["tms-off", "tm-off"],
    cooldown: 5
}