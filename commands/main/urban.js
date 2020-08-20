const Discord = require("discord.js");
const urban = require("urban");

exports.run = async (client, message, args) => {
    urban(args).first(json => {

      if (!json) return message.channel.send({
        embed: {
          "description": "Nothing found :sweat:",
          "color": 0xFF2222
        }
      });

      let embed = new Discord.MessageEmbed()
        .setColor(0x56aaff)
        .setDescription(json.definition)
        .addField('Example', json.example)
        .addField(`Upvotes`, json.thumbs_up, true)
        .addField(`Downvotes`, json.thumbs_down, true)
        .setFooter(`Written by ${json.author}`)
        .setTitle(json.word);

      message.channel.send(embed);
  });
}

exports.help = {
  name: "urban",
  description: "Lookup a word on the Urban Dictionary",
  usage: "/urban",
  example: "/urban"
};

exports.conf = {
  aliases: ["ub"],
  cooldown: 1 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
}