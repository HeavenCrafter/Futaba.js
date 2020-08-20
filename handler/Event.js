const { readirSync } = require("fs");

modules.exports = client => {
    const events = readirSync("./events/");
    for (let event of events) {
        let file = require(`../events/${event}`);
        client.on(event.split(".")[0], (...args) => file(client, ...args));
        
    }
}