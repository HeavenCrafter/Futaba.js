module.exports = {
    name: "ping",
    description: "Returns latency and API ping",
    run: async (client, message) => {
        if (message.author.id !== (process.env.HEAVEN_ID)) {
            message.delete()
            message.reply("Sorry. But it seems that you're not Heaven.");
        } else if (message.author.id === (process.env.HEAVEN_ID)) {
            message.channel.send("<:serveroffline:717160605638983730> もうすこしまって.").then((sentMessage) => sentMessage.edit("<:serveronline:717160605257171058> どうぞ `" + `${client.ws.ping}` + " ms`"))
        }
    }
}