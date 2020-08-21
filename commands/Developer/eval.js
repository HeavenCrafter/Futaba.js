const Discord = require("discord.js"),
        { post } = require("node-superfetch");

exports.run = async (client, message, args) => {
    if (!client.config.owners.includes(message.author.id)) return;

    const embed = new Discord.MessageEmbed()
    .addField("Input", "```js\n" + args.join(" ") + "```");

    try {
        const code = args.join(" ");
        if (!code) return message.channel.send("Please include the code.");
        let evaled;
    
    if (code.includes(`SECRET`) || code.includes(`TOKEN`) || code.includes("process.env")) {
        evaled = "No, shut up, what will you do it with the token?";
    } else {
        evaled = eval(code);
    }
    
    if (typeof evaled !== "string") evaled = require("util").inspect(evaled, {depth: 0});
    
    let output = clean(evaled);
    if (output.length > 1024) {
        const {body} = await post("https://hastebin.com/documents").send(output);
        embed.addField("Output", `https://hastebin.com/${body.key}.js`).setColor(0x7289DA);
    } else {
        embed.addField("Output", "```js\n" + output + "```").setColor(0x7289DA)
    }
    
    message.channel.send(embed);
    
    } catch (error) {
    let err = clean(error);
    if (err.length > 1024) {
        const {body} = await post("https://hastebin.com/documents").send(err);
        embed.addField("Output", `https://hastebin.com/${body.key}.js`).setColor("RED");
    } else {
        embed.addField("Output", "```js\n" + err + "```").setColor("RED");
    }
    
    message.channel.send(embed);
    }
}

exports.help = {
    name: "eval",
    description: "Evaluate some code.",
    usage: "eval <code>",
    example: "eval client.commands"
}

exports.conf = {
    aliases: ["ev"]
}

function clean(string) {
    if (typeof text === "string") {
        return string.replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203))
    } else {
        return string;
    }
}