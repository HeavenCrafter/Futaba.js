const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    try {
        var allowToUse = false;
        if(client.config.owners.includes(message.author.id)) allowToUse = true;

        if(allowToUse) {
            var g = client.guilds.cache.array().map(val => val.name).sort(), invite = [];
            //g.forEach(g => g.fetchInvites().then(i => i.array().forEach(ivt => invite.append(!jsl.isEmpty(ivt.url)?"- " + g.name + ": " + ivt.url:"no permission"))));
            for(let i = 0; i < g.length; i++)
                g[i] = "- " + g[i];
            let allGuilds = g.join("\n");

            let embed = new Discord.MessageEmbed()
            .setTitle("All Guilds:")
            .setDescription(allGuilds)
            //.addField("All Invites:", invite.join("\n"), false)

            message.channel.send(embed);
        }
        else {
            message.reply("this command can only be used by the developer.");
        }
    }
    catch(err) {
        message.reply("got an error while viewing all data.\nError: " + err);
    }
}

exports.help = {
    name: "guildsinfo",
    description: "-",
    usage: "-",
    example: "-"
  }
  
exports.conf = {
    aliases: ["guilds"],
  }