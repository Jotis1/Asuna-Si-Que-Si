const Discord = require("discord.js")

module.exports = {
    nombre: "sip",
    alias: [], 
    run: (client, message, args) => {
        let ocha = [
            "https://cdn.nekotina.com/images/zLpIge9B.gif",
            "https://cdn.nekotina.com/images/0EZj7-D6.gif",
            "https://cdn.nekotina.com/images/REYo622k.gif",
            "https://cdn.nekotina.com/images/4bNMbFpx.gif",
            "https://cdn.nekotina.com/images/mR0IBqmEN.gif",
            "https://cdn.nekotina.com/images/rRNqKGBj.gif",
            "https://cdn.nekotina.com/images/q0lit7dNW.gif",
            "https://cdn.discordapp.com/attachments/735980466582323353/797184189224845362/kirito.gif",
            "https://cdn.nekotina.com/images/G82qdfSk.gif",
            "https://cdn.nekotina.com/images/Z5mnlvB0.gif",
            "https://cdn.nekotina.com/images/AZ6QbCs3.gif",
            "https://cdn.nekotina.com/images/ynwUIDPe.gif",
            "https://cdn.discordapp.com/attachments/735980466582323353/797183409997742150/aw.gif",
            "https://cdn.nekotina.com/images/uxtGkrVKv.gif",
        ];

        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} está tomando ocha.`)
        .setColor("RANDOM")
        .setImage(ocha[Math.floor(Math.random() * ocha.length)])
        message.delete().catch()
        

        return message.channel.send(embed) 

    }

}