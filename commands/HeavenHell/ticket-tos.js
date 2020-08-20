const Discord = require("discord.js");

exports.run = async (client, message) => {
    if (client.config.owners.includes(message.author.id)) {
        message.delete();

        const ticket = new Discord.MessageEmbed()
        .setColor('#CC8899')
        .setAuthor('Support Terms Of Service', 'https://i.imgur.com/5fUSgNp.png', 'https://discord.com/invite/PrftN5q')
        .setTitle('In need of support? Contact us!')
        .setDescription("If you are ever in need of a staff member, whether it is urgent or simply just a question, you are always welcome to contact us using support tickets!\n\nWith that said, there are certain things that we don't appreciate you doing whenever creating a ticket. The main general rules of this Discord applies when making a ticket as well!\n\n**Always be logical and be calm.** We understand that you might be fustrated but you also have to understand that we have our own lives to deal with as well. Learn to be patient and we'll get back to you as soon as possible!\n\n**Provide any/addition information!** Simply saying *'hElp sOmEoNe iS breAKinG thE rUlEs'* won't help anyone. No matter what the scenario is, always provide details and information and have common sense!\n\n**Only 3 tickets can be made per person.** If you try and make an alt account just to spam creating tickets, you will be banned permanently banned from the Discord.")
        .setFooter("📙 Note: The TOS can change at any given moment so keep that in mind. To make a ticket, click on the reaction on the message below and a ticket will be generated!")
        .setTimestamp()

        message.channel.send(ticket);
    }
}

exports.help = {
    name: "ticket info",
    description: "-",
    usage: "ticket info",
    example: "ticket info"
  }
  
  exports.conf = {
    aliases: ["tickinfo"],
    cooldown: 1
  }