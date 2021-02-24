const Discord = require("discord.js")

module.exports = {
    nombre: "kaori",
    alias: [],
    run: (client, message, args) => {
        const kaori = new Discord.MessageEmbed()
        .setTitle('Siempre te estaré esperando, Nico.')
        .setImage('https://cdn.discordapp.com/attachments/800116937908682793/800139903090294814/kaori.gif')
        .setColor('ffe500')

        message.channel.send(kaori)
    }
}