# Futaba.js 双葉 🍁
A personal bot for HeavenHell Entertainment.

[![HeavenHell Entertainment](https://discord.com/api/guilds/707269837646200842/widget.png?style=shield)](https://discord.com/invite/ySsX7yF) [![Run on Repl.it](https://repl.it/badge/github/HeavenCrafter/Futaba.js)](https://repl.it/github/HeavenCrafter/Futaba.js)
![Futaba](https://cdn.discordapp.com/attachments/718085539173105687/740554375998734336/anime-rascal-does-not-dream-of-bunny-girl-senpai-rio-futaba-hd-wallpaper-preview.jpg)


**Currently only includes:**
* Main Admin Commands **(cd Futaba.js\commands\heavenhell)**
  * teasers.js - A way to release HeavenHell server teasers and images in an embed message format to a specific channel.
  * ping.js - Checks for ping and latency through the amount of time taken to send the message.
  * roles.js - Sends an embed message listing all user-reactable roles.
  * rules.js - Sends an embed message for rules of the server.

* Main Commands **(cd Futaba.js\commands\main)**
  * avatar.js - Get your own Avatar in an embed message. Supports static image and animated profiles. (PNG/JPGs/GIFs)
  * mcserver.js - Minecraft server status query in an embed message.
  * urban.js - Urban Dictionary word search. **(Note: Has a tendency to not work due to Discord's word limit.)**
  * weather.js - Gets the weather information from the specify location.


***Note: Futaba was specifically designed for HeavenHell's Discord, if you want to make the bot fit for your own platform, feel free to fork it to your liking.***

## Modifying the client.login method
A friendly reminder to those who wants to setup the bot for themselves. This bot is specifically designed for and hosted on [Heroku](https://dashboard.heroku.com/). Heroku has their own variable configuration which can be access using this line of code:
```
  client.login(process.env.BOT_TOKEN);
```
![Heroku Var Config](https://cdn.discordapp.com/attachments/718085539173105687/740417976737464431/download.png)

The login line is what I use for this bot. It is located at **cd Futaba.js\bot.js**:
```
Line 32) client.login(process.env.BOT_TOKEN);
```
You can change it to whatever you want depending on how you host your bot. Whether is through a config file or directly within the bot.js index file itself. As long as you know what you're doing, you should be fine.
![Client Login Line](https://cdn.discordapp.com/attachments/718085539173105687/740418945227686018/unknown.png)

## Installed npm packages
* Current installed node npm packages includes:
  * [ascii-table](https://www.npmjs.com/package/ascii-table)
  * [fetch](https://www.npmjs.com/package/fetch)
  * [urban](https://www.npmjs.com/package/urban)
  * [weather-js](https://www.npmjs.com/package/weather-js)
  * [body-parser](https://www.npmjs.com/package/body-parser)
  * [express](https://www.npmjs.com/package/express)
  * [minecraft-server-util](https://www.npmjs.com/package/minecraft-server-util)
  * [moment](https://www.npmjs.com/package/moment)
  * [ms](https://www.npmjs.com/package/ms)
  * [node-superfetch](https://www.npmjs.com/package/node-superfetch)
  * [os](https://www.npmjs.com/package/os)
  * [pase-ms](https://www.npmjs.com/package/parse-ms)
  * [cpu-stat](https://www.npmjs.com/package/cpu-stat)

## Future development plans for Futaba.js
I'm most likely going to slow down in terms of working on this bot as there isn't much to do. I mean I do have plans for it but at this current moment, it is what it is.

There are a couple things that I wanna get done but not right now at least.
- [x] Command Handler
- [x] FAQ Commands (Done on 21.8.2020)
- [x] Version List Commands (Done on 21.8.2020)
- [x] Event Handler (Done on 21.8.2020)
- [ ] Leveling System
- [x] Automated Help Command (Done on 21.8.2020)
- [ ] Specific User AFK Command
- [x] Statistic Command (Done on 21.8.2020)
- [x] User Info Command (Done on 21.8.2020)
- [x] Server Info Command (Done on 21.8.2020)
- [x] Starboard (Done, check out [Yuno.js](https://github.com/HeavenCrafter/Yuno.js), a fork of @Rushnett Starboard/Smugboard.)
- [x] r/discord_irl Meme Command (Done on 21.8.2020)
- [ ] Raid Lockdown Command
- [ ] Channel Archiving Command
- [ ] Snipe Command

I also have a few HeavenHell admin related commands/events and features that I wanna get done too.
- [x] Minecraft RCON (Done on 23.8.2020)
- [ ] Automatic Minecraft Server Status Query (Sends a message whenever it can't ping the server or if its offline.)

**Special thanks to @ansonfoong, @The-SourceCode and @Blob-Development for the wonderful Youtube series, it has definitely help me a lot throughout the development of Futaba.**

***If you're interested in adding stuff, feel free to open a pull request. 🌺***

Also, Discord. For the love of fucking god. I did not release my token to the public, it doesn't even keep the bot token here, leave me alone you beta bitch.
![Discord Being A Bitch](https://cdn.discordapp.com/attachments/718085539173105687/740432465847517284/unknown.png)
