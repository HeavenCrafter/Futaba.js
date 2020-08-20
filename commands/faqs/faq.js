const Discord = require("discord.js");

module.exports = {
    name: "faq",
    description: "Shows the list of versions that can be used to join GTAMC with.",
    run: async (client, message, args) => {
        if (message.author.id !== (process.env.HEAVEN_ID)) {
                message.delete();
                message.reply("Sorry. But it seems that you're not Heaven.");
        } else if (message.author.id === (process.env.HEAVEN_ID)) {
            if (!args.length) {
                message.delete();
                const faq = new Discord.MessageEmbed()
                .setColor('#CC8899')
                .setAuthor('Version Information and Details.')
                .setDescription("The list below shows the details of the versions.\n\n**If you have any issue or encounter any bugs when using any of the versions in the list below. Please provide some screenshots/videos of the occurance and contact us immediately by making a ticket.**")
                .addFields(
                    { name: 'Not yet tested for stability', value: 'Server supports the version but unsure if it is stable or not. Use with caution.', inline: true },
                    { name: 'Supported', value: 'Version is supported on the server', inline: true },
                    { name: 'Supported (Stable)', value: 'Version is supported and is stable to be used on the server', inline: true },
                    { name: 'Supported (Recommended)', value: 'Version is supported and is recommended to be used on the server', inline: true },
                    { name: 'Supported (Server Based Version)', value: 'Version is supported and server is built against said version', inline: true },
                    { name: 'Unsupported', value: 'Version is unsupported and will most likely never be supported', inline: true },
                    { name: 'Coming Soon', value: 'It means what it means. Coming soon. Duh.', inline: true },
                )
                message.channel.send(faq);

            } else if (args[0] === 'gtamc') {
                message.delete();
                const gtamcfaq = new Discord.MessageEmbed()
                .setColor('#CC8899')
                .setAuthor('GTAMC Supported Versions')
                .addFields(
                    { name: '1.16 - 1.16.1', value: 'Not yet tested for stability.', inline: true },
                    { name: '1.15 - 1.15.2', value: 'Not yet tested for stability', inline: true },
                    { name: '1.14 - 1.14.2', value: 'Not yet tested for stability', inline: true },
                    { name: '1.13 - 1.13.2', value: 'Supported (Server Based Version)', inline: true },
                    { name: '1.12 - 1.12.2', value: 'Supported (Stable and Recommended)', inline: true },
                    { name: '1.11 - 1.11.2', value: 'Not yet tested for stability', inline: true },
                    { name: '1.10 - 1.10.2', value: 'Not yet tested for stability', inline: true },
                    { name: '1.9 - 1.9.2', value: 'Not yet tested for stability', inline: true },
                    { name: '1.8 - 1.8.4', value: 'Not yet tested for stability', inline: true },
                    { name: '1.7 - 1.7.10', value: 'Not yet tested for stability', inline: true },
                    { name: '1.6 and Below', value: 'Unsupported (Dropped on 7/31/2020)', inline: true},
                    { name: 'Optifine', value: 'Supported (Stable and Recommended)', inline: true },
                    { name: 'Forge', value: 'Not yet tested for stability', inline: false },
                    { name: 'Bedrock Edition/MC:PE Support', value: 'Coming Soon', inline: false },
                )
                message.channel.send(gtamcfaq);

            } else if (args[0] === 'pvs') {
                message.delete();
                const pvsfaq = new Discord.MessageEmbed()
                .setColor('#CC8899')
                .setAuthor('Peach Valley Survival Supported Versions')
                .addFields(
                    { name: '1.16 - 1.16.1', value: 'Not yet tested for stability.', inline: true },
                    { name: '1.15 - 1.15.2', value: 'Supported (Server Based Version)', inline: true },
                    { name: '1.14 - 1.14.2', value: 'Unsupported', inline: true },
                    { name: '1.13 - 1.13.2', value: 'Unsupported', inline: true },
                    { name: '1.12 - 1.12.2', value: 'Unsupported', inline: true },
                    { name: '1.11 - 1.11.2', value: 'Unsupported', inline: true },
                    { name: '1.10 - 1.10.2', value: 'Unsupported', inline: true },
                    { name: '1.9 - 1.9.2', value: 'Unsupported', inline: true },
                    { name: '1.8 - 1.8.4', value: 'Unsupported', inline: true },
                    { name: '1.7 - 1.7.10', value: 'Unsupported', inline: true },
                    { name: '1.6 and Below', value: 'Unsupported', inline: true},
                    { name: 'Optifine', value: 'Supported (Stable and Recommended)', inline: true },
                    { name: 'Forge', value: 'Not yet tested for stability', inline: false },
                    { name: 'Bedrock Edition/MC:PE Support', value: 'Coming Soon', inline: false },
                )
                message.channel.send(pvsfaq);
            }
        }
    }
}