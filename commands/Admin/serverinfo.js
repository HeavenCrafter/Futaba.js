const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    var g = message.guild;
    /*message.reply("Created at: " + g.createdAt);
    message.reply("Region: " + g.region);
    message.reply("Icon: " + g.iconURL);
    message.reply("Member count: " + g.memberCount);
    message.reply("Owner: " + g.owner.displayName);*/

    let allMembers = g.memberCount;
    let oMb = g.members.cache.size;
    let membersNoBots = g.members.cache.filter(member => !member.user.bot).size;
    let botMembers = oMb - membersNoBots;
    let onlineMembers = g.members.cache.filter(m => (m.presence.status == "online" || m.presence.status == "idle" || m.presence.status == "dnd")).size - botMembers;

    try {
        var vL = message.guild.verificationLevel;
        let levels = {
            "NONE": "None (1/5)",
            "LOW": "Low (2/5)",
            "MEDIUM": "Medium (3/5)",
            "HIGH": "High (4/5)",
            "VERY_HIGH": "Highest (5/5)"
        }

        var verificationLevel = levels[vL];
    }
    catch(err) {
        var verificationLevel = "(not available)";
    }

    let embed = new Discord.MessageEmbed()
    .setTitle(g.name + ":")
    .addField("Owner:", g.owner.user.tag, true)
    .addField("Region:", g.region, true)
    .addField("Roles:", g.roles.cache.array().length, true)
    .addField("Verification Level:", verificationLevel, true)
    .addField("Online Members / Total Members / Bots:", "**" + onlineMembers + "** / **" + allMembers + "** / **" + botMembers + "**", false)
    .addField("Created:", g.createdAt.toUTCString(), false)
    .setThumbnail(g.iconURL({format: "png"}))

    message.channel.send(embed);
}

exports.help = {
    name: "serverinfo",
    description: "-",
    usage: "-",
    example: "-"
  }
  
exports.conf = {
    aliases: ["serinfo"],
  }