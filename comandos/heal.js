const Discord = require("discord.js")

module.exports = {
    nombre: "heal",
    alias: [],
    run: (client, message, args) => {
        let miembro = message.mentions.members.first();


        let vuelo = [
            "https://cdn.nekotina.com/images/XxJVnvt5.gif",
            "https://cdn.nekotina.com/images/918iQUkV.gif",
            "https://cdn.nekotina.com/images/ys054Rvh.gif",
            "https://cdn.nekotina.com/images/_vNzlS1T.gif",
            "https://cdn.nekotina.com/images/zoXUg4GG.gif",
            "https://cdn.nekotina.com/images/XWEARdsM.gif",
            "https://cdn.nekotina.com/images/pyS4nHIg.gif",
            "https://cdn.nekotina.com/images/8Yf2pAFE.gif",
            "https://imgur.com/B5uPR9i.gif",
            "https://cdn.discordapp.com/attachments/399448944889036801/755031517352165406/cure.gif",
            "https://imgur.com/6XuuPCi.gif",
            "https://imgur.com/nyKWP3B.gif",
        
        ];
        message.delete().catch()

        if(message.author.id == miembro.id){
            const embed = new Discord.MessageEmbed()
            .setTitle(`¡${message.author.username} se está curando!`)
            .setColor("RANDOM")
            .setImage(vuelo[Math.floor(Math.random() * vuelo.length)])
        
        
            return message.channel.send(embed)
        }
  
        if(!miembro){
            const embed = new Discord.MessageEmbed()
            .setTitle(`¡${message.author.username} se está curando!`)
            .setColor("RANDOM")
            .setImage(vuelo[Math.floor(Math.random() * vuelo.length)])
        
        
            return message.channel.send(embed)
        }

        let img = message.mentions.users.first();
        
        const embed = new Discord.MessageEmbed()
    
          .setTitle(`¡A ${message.author.username} está curando a ${img.username}!`)
          .setColor("RANDOM")
          .setImage(vuelo[Math.floor(Math.random() * vuelo.length)]);
    
        message.channel.send(embed);

    }
}