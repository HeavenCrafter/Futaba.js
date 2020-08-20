const Discord = require("discord.js");
const { Rcon } = require("rcon-client");

module.exports = {
    name: "rcon",
    description: "rcon",
    run: async (client, message, args, rcon) => {
        if (args[0] === `connect`) {
            const rcon = new Rcon({ host: "195.201.86.30", port: 30329, password: "heaven_0928" })

            message.channel.send("Connecting...")

            rcon.on("connect", () => message.channel.send("connected") + console.log("connected"))
            rcon.on("authenticated", () => message.channel.send("authenticated") + console.log("authenticated"))
            rcon.on("end", () => console.log("end"))

            await rcon.connect()

            console.log(await rcon.send('ver'))
        }
        if (args[0] === `disconnect`) {
            const rcon = new Rcon({ host: "195.201.86.30", port: 30329, password: "heaven_0928" })

            message.channel.send("dcing...")

            rcon.on("end", () => console.log("end"))
            rcon.on("connect", () => message.channel.send("connected") + console.log("connected"))

            await rcon.connect()

            rcon.end()
        }
        if (args[0]) {
        }
    }
}