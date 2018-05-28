const Discord = require("discord.js")
let bot = new Discord.Client()
bot.on("ready", () => console.log("Connected"))
bot.on("message", async message =>{
  if(message.content == "//ping") message.reply(bot.ping)
})
bot.login(process.env.token)
