const Discord = require("discord.js")

module.exports = {
    nombre: "happy",
    alias: [],
    run: (client, message, args) => {
        let vuelo = [
            "https://cdn.nekotina.com/images/3_Y8BcCke.gif",
            "https://cdn.nekotina.com/images/JqihzWKgC.gif",
            "https://cdn.nekotina.com/images/PP6ziDMUX.gif",
            "https://cdn.nekotina.com/images/zOQanRiz2.gif",
            "https://cdn.nekotina.com/images/K2pjFQwMK.gif",
            "https://cdn.nekotina.com/images/MuUD-2gC.gif",
            "https://cdn.nekotina.com/images/Ftu1IBw2.gif",
            "https://cdn.nekotina.com/images/42IAL-a9W.gif",
            "https://cdn.nekotina.com/images/liVJhdgk1.gif",
            "https://cdn.nekotina.com/images/9FYeZPy3d.gif",
            "https://cdn.discordapp.com/attachments/399448944889036801/751527160811880479/f66e4705-050d-4904-99e8-f4a27e76b7c6.gif",
            "https://cdn.nekotina.com/images/Jd6W6AfMl.gif",
        
        ];
        message.delete().catch()
  
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}... ¡se ha vuelto loco de la alegría!.`)
        .setColor("RANDOM")
        .setImage(vuelo[Math.floor(Math.random() * vuelo.length)])
        
  
        return message.channel.send(embed)
    


    }

}