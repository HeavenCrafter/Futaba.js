const Discord = require("discord.js");

module.exports.help = "Gives some info about the server";
module.exports.run = (client, message) => {
  var g = message.guild;
  /*message.reply("Created at: " + g.createdAt);
  message.reply("Region: " + g.region);
  message.reply("Icon: " + g.iconURL);
  message.reply("Member count: " + g.memberCount);
  message.reply("Owner: " + g.owner.displayName);*/

  let embed = new Discord.MessageEmbed()
  .setTitle(g.name + ":")
  .setDescription("**Owner:** " + g.owner.displayName
  + "\n**Created:** " + g.createdAt.toString().replace(/(\(GMT\+\d*\:\d*\))/gm, "")
  + "\n**Region:** " + g.region
  + "\n**Members:** " + g.memberCount)
  .setThumbnail(g.iconURL)

  message.channel.send(embed);
}

exports.help = {
  name: "guildinfo",
  description: "-",
  usage: "-",
  example: "-"
}

exports.conf = {
  aliases: ["guild"],
}