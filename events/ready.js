const os = require('os');
const cpuStat = require('cpu-stat');

module.exports = async (client) => {
    console.log("The bot is ready!");

    //Checks server specifications and logs them on console on startup
    cpuStat.usagePercent(function (error, percent, seconds) {
        if (error) {
            return console.error(error)
        }
        const cores = os.cpus().length // Threads and Core counts
        const cpuModel = os.cpus()[0].model // CPU Model
        const guild = client.guilds.cache.size.toLocaleString() // Total Servers
        const user = client.users.cache.size.toLocaleString() // Total Users
        const channel = client.channels.cache.size.toLocaleString() // Total Channels
        const usage = formatBytes(process.memoryUsage().heapUsed) // Mem Usage
        const Node = process.version // Node Ver
        const CPU = percent.toFixed(2) // CPU Usage

        //The actual logging part itself
        console.log('Bot Statistics:', `Server: ${guild} \nUser: ${user} \nChannel: ${channel} \nUsage: ${usage} \nNode: ${Node} \nCPU Usage: ${CPU}%`) // Use Grave accent or `` 
        console.log('Physical Statistics:', `CPU: ${cores} - ${cpuModel} \nUptime: ${parseDur(client.uptime)}`)
    })
}

//Formats bytes and stuff
function formatBytes (a, b) {
    if (0 == a) return "0 Bytes";
    let c = 1024,
        d = b || 2,
        e = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        f = Math.floor(Math.log(a) / Math.log(c));
    return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f]
}

//Formats the time and stuff
function parseDur(ms) {
    let seconds = ms / 1000,
        days = parseInt(seconds / 86400);
    seconds = seconds % 86400
    let hours = parseInt(seconds / 3600);
    seconds = seconds % 3600
    let minutes = parseInt(seconds / 60);
    seconds = parseInt(seconds % 60)
    if (days) {
        return `${days} day, ${hours} hours, ${minutes} minutes`
    } else if (hours) {
        return `${hours} hours, ${minutes} minutes, ${seconds} seconds`
    } else if (minutes) {
        return `${minutes} minutes, ${seconds} seconds`
    }
    return `${seconds} second(s)`
}