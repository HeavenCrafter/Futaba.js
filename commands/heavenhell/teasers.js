const Discord = require("discord.js");

module.exports = {
    name: "steaser",
    description: "Releases new Peach Valley Survival teasers.",
    run: async (client, message, args) => {
        if (message.author.id !== (process.env.HEAVEN_ID)) {
                message.delete();
                message.reply("Sorry. But it seems that you're not Heaven.");
        } else if (message.author.id === (process.env.HEAVEN_ID)) {
            if (!args.length) {
                message.delete()
                return message.channel.send(`!steaser (Image Link **[Supports Gif and Image]**) (Channel ID **[Name NOT Supported]**) (Footer Message)`)
                    .then(msg => {
                        msg.delete({ timeout: 3000 })
                    })
            } else if (args[0] === undefined) {
                message.delete()
                message.channel.send(`I need an image to place into the teaser embed, ${message.author}.`)
                    .then(msg => {
                        msg.delete({ timeout: 3000 })
                    })
            } else if (args[1] === undefined) {
                message.delete()
                message.channel.send(`I need a channel to send this to, ${message.author}.\nMake sure to send in the channel ID instead of name.`)
                    .then(msg => {
                        msg.delete({ timeout: 3000 })
                    })
            } else if (args[2] === undefined) {
                message.delete()
                message.channel.send(`I need a footer message, ${message.author}.`)
                    .then(msg => {
                        msg.delete({ timeout: 3000 })
                    })
            } else {
                message.delete()
                let footermsg = args.slice(2).join(' ');
                message.channel.send(`**楽しんで!**`);
                let oicon = message.author.avatarURL({ format: 'png', dynamic: true });

                const pvsteaser = new Discord.MessageEmbed()
                .setColor('#FFB6C1')
                .setAuthor ('Hey, a new teaser has been released!', 'https://i.imgur.com/5fUSgNp.png', 'https://discord.com/invite/PrftN5q')
                .setThumbnail('https://i.imgur.com/HLcvf26.png')
                .addField('Releasing Soon!', '26/09 - 28/09', true)
                .setImage(`${args[0]}`)
                .setFooter(footermsg, oicon)
                .setTimestamp()

                const logteaser = new Discord.MessageEmbed()
                .setTitle("A teaser was released.")
                .setImage(`${args[0]}`)
                .setThumbnail(`${message.author.avatarURL({ format: 'png', dynamic: true })}`)
                .setTimestamp()
                .addFields(
                    { name: 'User Who Sent The Teaser:', value: `${message.author}` },
                    { name: 'Image Link:', value: `${args[0]}` },
                    { name: 'Channel That Was Sent:', value: `<#${args[1]}>\n${args[1]}` },
                    { name: 'Footer Message:', value: footermsg },
                )

                client.channels.cache.get(`${args[1]}`).send(pvsteaser)
                client.channels.cache.get("716339740625862787").send(logteaser)
            }
        }
    }
}