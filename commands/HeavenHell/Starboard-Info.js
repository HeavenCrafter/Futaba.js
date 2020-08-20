const Discord = require("discord.js");

exports.run = async (client, message) => {
    if (client.config.owners.includes(message.author.id)) {
        message.delete();

        const starboard = new Discord.MessageEmbed()
        .setColor('#CC8899')
        .setAuthor('⭐ Starboard!')
        .setDescription("When using Yuno (Starboard), we usually don't mind whatever is being starred. But there are limitations as to what can and cannot be starred here.\n\nAnything that involves **overly racist, homophobic, personal and NSFW related content/detail**.\n\nThis applies for any of the blacklisted words on Dyno as well. Going against these rules will result in a mute and possibly even a ban!\n\nJust have common sense and have fun shitposting.")
        .setFooter("To get started, react on any messages that you think should be on a starboard with a ⭐ emote!")
        .setTimestamp()
    
        message.channel.send(starboard);
    }
}

exports.help = {
    name: "starboard info",
    description: "-",
    usage: "starboard info",
    example: "starboard info"
  }
  
  exports.conf = {
    aliases: ["starinfo"],
    cooldown: 1
  }