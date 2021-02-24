const Discord = require("discord.js")

module.exports = {
    nombre: "erina",
    alias: [],
    run: (client, message, args) => {
        message.react('👩‍🍳')
        const erina = new Discord.MessageEmbed()
        .setTitle('Cocinemos juntos Chelin')
        .setColor('ff0000')
        .setImage('https://cdn.discordapp.com/avatars/318120108662849538/f407e71073ed85c7283c823aec16f922.webp?size=4096')
        message.channel.send(erina) 
    }
}