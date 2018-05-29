const Discord = require("discord.js")
const fs = require("fs")
let bot = new Discord.Client()
bot.on("ready", () => console.log("Connected"))
bot.on("message", async message =>{
  if(message.content == "//ping") message.channel.send(bot.ping)
  if(message.content == "//test") message.channel.send(fs.readFileSync("./test.txt", "utf8"))
})
bot.login(process.env.token)
