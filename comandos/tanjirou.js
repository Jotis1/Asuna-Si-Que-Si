const Discord = require("discord.js")

module.exports = {
    nombre: "tanjirou",
    alias: [],
    run: (client, message, args) => {
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Salvemos y protegamos al mundo de todos los demonios.')
        .setImage('https://cdn.discordapp.com/attachments/735980466582323353/800133082324926515/tanjirou.gif')
        .setColor('00aae4')
    
        message.channel.send(embed)
        
    }
}
