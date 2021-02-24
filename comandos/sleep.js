const Discord = require("discord.js")

module.exports = {
    nombre: "sleep",
    alias: [], 
    run: (client, message, args) => {
        let mimir = [
            "https://images-ext-2.discordapp.net/external/A8Av7EE4Ms0SSEoztzOQuq_ilWZOv3coBC9xM3lgcYc/https/imgur.com/eZMfVUq.gif.gif",
            "https://cdn.discordapp.com/attachments/744704938424270953/797184780550668369/s1c.gif",
            "https://cdn.discordapp.com/attachments/735980466582323353/797185119412420608/s1.gif",
            "https://cdn.discordapp.com/attachments/735980466582323353/797185232931520532/s1.gif",
            "https://cdn.discordapp.com/attachments/735980466582323353/797185419645026324/s1.gif",
            "https://cdn.discordapp.com/attachments/735980466582323353/797185527442833428/s1.gif",
            "https://discord.com/channels/@me/744704938424270953/797183497412411393",
            "https://cdn.discordapp.com/attachments/735980466582323353/797185805294632970/s1.gif",
            "https://cdn.discordapp.com/attachments/735980466582323353/797185946994343936/s1.gif",
            "https://cdn.discordapp.com/attachments/735980466582323353/797186118566674452/s1.gif",
            "https://cdn.discordapp.com/attachments/735980466582323353/797186272863059968/s1.gif",
            "https://cdn.discordapp.com/attachments/735980466582323353/797186413443022873/s1.gif",
        
        ];

        message.delete().catch()

        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} está durmiendo profundamente.`)
        .setColor("RANDOM")
        .setImage(mimir[Math.floor(Math.random() * mimir.length)])
        

        return message.channel.send(embed) 

     

    }

}