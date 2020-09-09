const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    if(message.member.roles.cache.find(r => r.name === 'Staff') || (message.member.roles.cache.find(r => r.name === 'Support Team'))) {
        if (!args.length) {
            message.delete()
            message.channel.send("Which server?")
            .then(msg => {
                msg.delete({ timeout: 3000 })
            })
        } else if (args[0] === 'gtamc') {
            message.delete();
            const gtamcver = new Discord.MessageEmbed()
            .setColor('#CC8899')
            .setAuthor('GTAMC Supported Versions')
            .addFields(
                { name: '1.16 - 1.16.1', value: 'Not yet tested for stability.', inline: true },
                { name: '1.15 - 1.15.2', value: 'Not yet tested for stability', inline: true },
                { name: '1.14 - 1.14.2', value: 'Not yet tested for stability', inline: true },
                { name: '1.13 - 1.13.2', value: 'Supported (Server Based Version)', inline: true },
                { name: '1.12 - 1.12.2', value: 'Supported (Stable and Recommended)', inline: true },
                { name: '1.11 - 1.11.2', value: 'Not yet tested for stability', inline: true },
                { name: '1.10 - 1.10.2', value: 'Not yet tested for stability', inline: true },
                { name: '1.9 - 1.9.2', value: 'Not yet tested for stability', inline: true },
                { name: '1.8 - 1.8.4', value: 'Not yet tested for stability', inline: true },
                { name: '1.7 - 1.7.10', value: 'Not yet tested for stability', inline: true },
                { name: '1.6 and Below', value: 'Unsupported (Dropped on 7/31/2020)', inline: true},
                { name: 'Optifine', value: 'Supported (Stable and Recommended)', inline: true },
                { name: 'Forge', value: 'Not yet tested for stability', inline: false },
                { name: 'Bedrock Edition/MC:PE Support', value: 'Coming Soon', inline: false },
            )
            message.channel.send(gtamcver)
            .then(msg => {
                msg.delete({ timeout: 9000 })
            })
        } else if (args[0] === 'pvs') {
            message.delete();
            const pvsver = new Discord.MessageEmbed()
            .setColor('#CC8899')
            .setAuthor('Peach Valley Survival Supported Versions')
            .addFields(
                { name: '1.16 - 1.16.1', value: 'Not yet tested for stability.', inline: true },
                { name: '1.15 - 1.15.2', value: 'Supported (Server Based Version)', inline: true },
                { name: '1.14 - 1.14.2', value: 'Unsupported', inline: true },
                { name: '1.13 - 1.13.2', value: 'Unsupported', inline: true },
                { name: '1.12 - 1.12.2', value: 'Unsupported', inline: true },
                { name: '1.11 - 1.11.2', value: 'Unsupported', inline: true },
                { name: '1.10 - 1.10.2', value: 'Unsupported', inline: true },
                { name: '1.9 - 1.9.2', value: 'Unsupported', inline: true },
                { name: '1.8 - 1.8.4', value: 'Unsupported', inline: true },
                { name: '1.7 - 1.7.10', value: 'Unsupported', inline: true },
                { name: '1.6 and Below', value: 'Unsupported', inline: true},
                { name: 'Optifine', value: 'Supported (Stable and Recommended)', inline: true },
                { name: 'Forge', value: 'Not yet tested for stability', inline: false },
                { name: 'Bedrock Edition/MC:PE Support', value: 'Coming Soon', inline: false },
            )
            message.channel.send(pvsver)
            .then(msg => {
                msg.delete({ timeout: 9000 })
            })
        }
    }
}

exports.help = {
    name: "version",
    description: "-",
    usage: "version [server]",
    example: "version gtamc"
}

exports.conf = {
    aliases: ["ver"],
    cooldown: 1
}