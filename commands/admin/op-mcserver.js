const Discord = require("discord.js");
const ping = require('minecraft-server-util');

module.exports = {
name: "op-mcserver",
    description: "Pings a Minecraft Server but with additional information",
    run: async (client, message, args ) => {
        if (message.author.id !== (process.env.HEAVEN_ID)) {
            message.delete()
            message.channel.send("Sorry. But it seems that you're not Heaven.");
        } else if (message.author.id === (process.env.HEAVEN_ID)) {
            if (!args.length) {
                message.delete()
                message.channel.send("You didn't provide a server IP for me to ping. Port is not needed.")
                .then(msg => {
                    msg.delete({ timeout: 3000 })
                })
            } else {
                const pingAwait = new Discord.MessageEmbed()
                .setAuthor(`Connecting to ${args[0]}...`, "https://i.imgur.com/kK0symU.gif")
                .setTimestamp()
                message.channel.send(pingAwait).then
                ping(args[0], 25565, (error, response) => {
                    if (response) {
                        const pingResponse = new Discord.MessageEmbed()
                        .setColor("#00AA00")
                        .setThumbnail(`https://eu.mc-api.net/v3/server/favicon/${args[0]}`)
                        .setAuthor(`Connected!`, "https://i.imgur.com/jVZ73Tg.png")
                        .addField('`Server IP`', response.host)
                        .addField('`Server Version`', response.version)
                        .addField('`Online Players`', response.onlinePlayers)
                        .addField('`Max Players`', response.maxPlayers)
                        .addField('`Protocol Version`', response.protocolVersion)
                        .addField('`MOTD`', response.descriptionText)
                        .setTimestamp()
                        .setImage(`https://mcapi.us/server/image?ip=${args[0]}&theme=dark`)
                        message.channel.send(pingResponse)
                } else if (error) {
                    const pingError = new Discord.MessageEmbed()
                    .setColor("#AA0000")
                    .setThumbnail(`https://eu.mc-api.net/v3/server/favicon/${args[0]}`)
                    .setAuthor(`Can't connect to server!`, "https://i.imgur.com/xSX3L27.png")
                    .setDescription("Was unable to ping server. It is either offline or it does not exist.\nThis error has been logged to console.")
                    .addField("Pinged Server IP:", `${args[0]}`)
                    .addField("Error Code", error)
                    .setImage(`https://mcapi.us/server/image?ip=${args[0]}&theme=dark`)
                    .setTimestamp()
                    message.channel.send(pingError);
                    }
                });
            }
        }
    }
}