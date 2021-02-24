const Discord = require("discord.js")

module.exports = {
    nombre: "like",
    alias: [],
    run: (client, message, args) => {
        let miembro = message.mentions.members.first();


        let vuelo = [
            "https://cdn.nekotina.com/images/Ey4hxlvu.gif",
            "https://cdn.nekotina.com/images/WreFYzTP.gif",
            "https://cdn.nekotina.com/images/w-13TmlC.gif",
            "https://cdn.nekotina.com/images/Axy4eK3y.gif",
            "https://cdn.nekotina.com/images/U7tHdwWi.gif",
            "https://cdn.nekotina.com/images/35V11FEu.gif",
            "https://cdn.nekotina.com/images/VN_m11dT.gif",
            "https://cdn.nekotina.com/images/ha7L97EU.gif",
            "https://cdn.nekotina.com/images/SB3H62G8.gif",
            "https://cdn.nekotina.com/images/Tn1QW-c8.gif",
            "https://cdn.nekotina.com/images/I6AtAg6z.gif",
            "https://cdn.nekotina.com/images/Bh817ONG.gif",
        
        ];
        message.delete().catch()

        
  
        if(!miembro){
            const embed = new Discord.MessageEmbed()
            .setTitle(`¡A ${message.author.username} le gusta eso!`)
            .setColor("RANDOM")
            .setImage(vuelo[Math.floor(Math.random() * vuelo.length)])
        
        
            return message.channel.send(embed)
        }

        let img = message.mentions.users.first();
        
        const embed = new Discord.MessageEmbed()
    
          .setTitle(`¡A ${message.author.username} le gusta lo que haces ${img.username}!`)
          .setColor("RANDOM")
          .setImage(vuelo[Math.floor(Math.random() * vuelo.length)]);
    
        message.channel.send(embed);

    }
}