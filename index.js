const Discord = require("discord.js")
let bot = new Discord.Client()

bot.on("message", async message =>{
  if(message.content == "//ping") message.reply("Pong")
})
bot.login(process.env.token)
