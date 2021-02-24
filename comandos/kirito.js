const Discord = require("discord.js")

module.exports = {
    nombre: "kirito",
    alias: [],
    run: (client, message, args) => {
        const kirito = new Discord.MessageEmbed()
        .setTitle('Enhance Armament')
        .setImage('https://cdn.discordapp.com/attachments/800116937908682793/800137748836909116/1bd1da4ade6de2280b17c7b14d0fb6cd.gif')
        .setColor('000000')
        
        message.channel.send(kirito)
    }
}
