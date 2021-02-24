const Discord = require("discord.js")

module.exports = {
    nombre: "kurumi",
    alias: [],
    run: (client, message, args) => {
        const kurumi = new Discord.MessageEmbed()
        .setTitle('Ara Ara, Vesk-San')
        .setImage('https://cdn.discordapp.com/attachments/800116937908682793/800118054247071744/b60519f441412bedbe5fb16999e30335.gif')
        .setColor('ff0000')

        message.channel.send(kurumi)
    }
}