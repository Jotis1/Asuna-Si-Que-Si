const Discord = require("discord.js")

module.exports = {
    nombre: "social",
    alias: [],
    run: (client, message, args) => {
        let embed = new Discord.MessageEmbed()
        .setTitle('Redes Sociales')
        .setDescription('Estas son las redes sociales de VictoRuch')
        .setImage('https://cdn.discordapp.com/attachments/737338905485115394/753700338518720552/Screenshot_20200910_200512.jpg')
        .setColor('RANDOM')
        .addField('Youtube', 'VictoRuch', true)
        .addField('Twitch', 'victoruchh', true)
        .addField('Instagram', '@victoruchh', true)
        .addField('Twitter', '@victoruch1', true)
        message.channel.send(embed)
    }
}