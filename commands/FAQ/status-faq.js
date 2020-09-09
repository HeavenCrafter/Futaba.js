const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    if (!client.config.owners.includes(message.author.id)) {
        message.delete();
        message.reply("Sorry. But it seems that you're not Heaven.");
    } else if (client.config.owners.includes(message.author.id)) {
        if (!args.length) {
            message.delete();

            const info = new Discord.MessageEmbed()
            .setColor('#CC8899')
            .setDescription("Experiencing latency issues with our platform? Are one of the servers down?\n**Check the uptime/downtime, maintenance and lantency statuses here!**")

            const status = new Discord.MessageEmbed()
            .setColor('#CC8899')
            .setAuthor('HeavenHell Network Status and Uptime')
            .addFields(
                { name: 'Dynmap', value: '[Visit Page](http://map.heavenhell.ml:30573/)', inline: true },
                { name: 'Plans Analysis', value: '[Visit Page](http://plan.heavenhell.ml:30809/)', inline: true },
                { name: 'Web Page', value: '*Coming Soon*', inline: true },
                { name: 'Status Page', value: '[View Status Page](https://heavenhell.statuspage.io/)', inline: true },
                { name: 'Uptime Page', value: '[View Uptime Page](https://status.heavenhell.ml/)', inline: true },
            )
            message.channel.send(info);
            message.channel.send(status);
        }
    }
}

exports.help = {
    name: "status",
    description: "-",
    usage: "status",
    example: "-"
}

exports.conf = {
    aliases: ["status"],
    cooldown: 1
}