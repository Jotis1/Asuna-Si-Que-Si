const Discord = require("discord.js")

module.exports = {
    nombre: "trap",
    alias: [],
    run: (client, message, args) => {
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Alaben todos a dios.')
        .setImage('https://cdn.discordapp.com/attachments/800116937908682793/801505529032736828/astolfo.gif')
        .setColor('fc67d2')
    
        message.channel.send(embed)
        
    }
}