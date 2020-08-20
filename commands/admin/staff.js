const Discord = require("discord.js");

module.exports = {
    name: "staff",
    description: "Adds a user to as staff and adds a staff role to mentioned user.",
    run: async (client, message, args) => {
        if (message.author.id !== (process.env.HEAVEN_ID)) {
            message.delete()
            message.reply("Sorry. But it seems that you're not Heaven.");
        } else if (message.author.id === (process.env.HEAVEN_ID)) {
            const member = message.mentions.members.first();
            if(!member) return message.channel.send("Please specify the user.")
            const role = message.guild.roles.cache.find(r => r.name === args.slice(1).join(" "));
            const staff = message.guild.roles.cache.find(r => r.name === "Staff");
            if(!role) return message.channel.send("Please specify a role.")
            await member.roles.add(role.id), message.channel.send(`${member} now has proper set roles, including staff role.`)
            member.roles.add(staff).catch(console.error);
        }
    }
};
