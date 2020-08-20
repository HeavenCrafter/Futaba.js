const Discord = require("discord.js");

exports.run = async (client, message) => {
    if (client.config.owners.includes(message.author.id)) {
        message.delete();

        const rules1 = new Discord.MessageEmbed()
        .setColor('#CC8899')
        .setAuthor('Rules and Terms', 'https://i.imgur.com/5fUSgNp.png', 'https://discord.com/invite/PrftN5q')
        .setTitle('Welcome to HeavenHell Entertainment Discord server!')
        .setDescription("Make sure to read the rules to gain access to the rest of the channels. No excuses!\n\n**Don't be toxic.** Pretty self explanatory.\n\n**Don't spam messages/spam ping staff members.** If you need any help, you're more than welcome to privately DM <@694138001273651271> or any of the staff members. You can also optionally make a ticket as well.\n\n**Strictly no NSFW content.** Please keep the public general chat clean, no one wants to see that sort of crap.\n\n**Swearing is allowed.** But do it in moderation.\n\n**Do not threaten other members and staff members.** You'll only get yourself banned not only from this Discord, you'll be reported to Discord's Trust and Safety Team as well.\n\n**Do not advertise/DM advertise.** No one wants to see your *(at best)* mediocre server. You'll just get yourself permanently banned. If you want to know about our partnership program, read the pins on the <#716128326326157353> channel.\n\n**Have common sense.** Just be civilized and don't start drama. Thats about it.")
        .setThumbnail('https://i.imgur.com/E351GW8.png')
        .setFooter("📙 Note: The Rules and Terms can change at any given moment, so keep that in mind. But as long as you behave and have common sense, you'll be fine.")
        .setTimestamp()
    
        const rules2 = new Discord.MessageEmbed()
        .setColor('#CC8899')
        .setImage('https://i.imgur.com/S36oJN2.gif')
    
        const rules3 = new Discord.MessageEmbed()
        .setColor('#CC8899')
        .setAuthor('Verification', 'https://i.imgur.com/5fUSgNp.png', 'https://discord.com/invite/PrftN5q')
        .setDescription('To gain access to the rest of the channels, click on the <:hhstar:712155123219955743> reaction!')
    
        message.channel.send(rules1);
        message.channel.send("> **Permanent Invite Link** - https://discord.com/invite/ySsX7yF");
        message.channel.send(rules2);
        message.channel.send(rules3);
    }
}

exports.help = {
    name: "rules",
    description: "-",
    usage: "!rules",
    example: "!rules"
};

exports.conf = {
    aliases: [],
    cooldown: 1
}