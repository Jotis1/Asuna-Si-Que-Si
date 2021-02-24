const Discord = require("discord.js")

module.exports = {
    nombre: "zerotwo",
    alias: ["02"],
    run: (client, message, args) => {
        const aiohto = new Discord.MessageEmbed()
        .setTitle('Aqui esta la waifu mas hermosa del mundo, todo el mundo a rezar pa que hagan una segunda temporada y que muera hiro.')
        .setImage('https://cdn.discordapp.com/attachments/800116937908682793/813843828263747623/Zero_Two-08425304-4035-405f-8c29-7b6ce18b7e1f.jpg')
        .setColor('BLACK')

        message.channel.send(aiohto) 
    }
}