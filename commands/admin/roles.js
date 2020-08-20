const Discord = require("discord.js");

module.exports = {
    name: "roles",
    description: "Sets up role selection embed.",
    run: async (client, message) => {
        if (message.author.id !== (process.env.HEAVEN_ID)) {
            message.delete()
            message.reply("Sorry. But it seems that you're not Heaven.");
        } else if (message.author.id === (process.env.HEAVEN_ID)) {
            message.delete();

            const rolesel = new Discord.MessageEmbed()
            .setColor('#CC8899')
            .setAuthor('Role Selection', 'https://i.imgur.com/5fUSgNp.png', 'https://discord.com/invite/PrftN5q')
            .setDescription("**Select the roles for servers you want to get notifications and updates on!**\nThis is to prevent constant ping spams whenever there is an update!")
  
            const rolesel1 = new Discord.MessageEmbed()
            .setColor('#CC8899')
            .setAuthor('Main Servers!')
            .setDescription("<:serveroffline:717160605638983730> - **GTAMC Updates!** *(Coming Soon)*\n\n<:PVS:718116899304505354> - <@&716133732167319651>\n\n<:serveroffline:717160605638983730> - **Farlands RPG Updates!** *(Coming Soon)*\n\n<:serveroffline:717160605638983730> - **CopsNRobbers Updates!** *(Coming Soon)*\n\n<:serveroffline:717160605638983730> - **Assassin's Creed Updates!** *(Coming Soon)*")
  
            const rolesel2 = new Discord.MessageEmbed()
            .setColor('#CC8899')
            .setAuthor('Modpacks!')
            .setDescription("<:NA:718117191488241745> - <@&716133735346470948>")
  
            const rolesel3 = new Discord.MessageEmbed()
            .setColor('#CC8899')
            .setAuthor('Miscellaneous!')
            .setDescription("<:Teasers:716137115036942406> - <@&716136668754870302>")
  
            message.channel.send(rolesel);
            message.channel.send(rolesel1);
            message.channel.send(rolesel2);
            message.channel.send(rolesel3);
        }
    }
}