const Discord = require("discord.js")

module.exports = {
    nombre: "aiohto",
    alias: [],
    run: (client, message, args) => {
        const aiohto = new Discord.MessageEmbed()
        .setTitle('Mira como salto compañero!!!')
        .setImage('https://cdn.discordapp.com/attachments/800116937908682793/800148136307851274/tumblr_ebbb914a33bd31ecffeca2c10147a54d_fdab1039_540.gif')
        .setColor('ffe500')

        message.channel.send(aiohto) 
    }
}