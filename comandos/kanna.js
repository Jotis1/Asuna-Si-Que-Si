const Discord = require("discord.js")

module.exports = {
    nombre: "kanna",
    alias: [],
    run: (client, message, args) => {
        const kanna = new Discord.MessageEmbed()
        .setTitle('Lo que veo me lo como :yum: (#Slow)')
        .setImage('https://cdn.discordapp.com/attachments/800116937908682793/800124963049701416/Kanna-Kamui.gif')
        .setColor('fc67d2')

        message.channel.send(kanna)
    }
}