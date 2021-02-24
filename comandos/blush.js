const Discord = require("discord.js")

module.exports = {
    nombre: "blush",
    alias: [],
    run: (client, message, args) => {
        let vuelo = [
            "https://cdn.nekotina.com/images/R749dqm7.gif",
            "https://cdn.nekotina.com/images/IaRXfyO1.gif",
            "https://cdn.nekotina.com/images/yM4bTmO3.gif",
            "https://cdn.nekotina.com/images/qTawKpHQ.gif",
            "https://cdn.nekotina.com/images/2sJLey7g.gif",
            "https://cdn.nekotina.com/images/zk6zZXXsS.gif",
            "https://cdn.nekotina.com/images/Gv-QXWP3.gif",
            "https://cdn.nekotina.com/images/AYqQ6sa_.gif",
            "https://cdn.nekotina.com/images/Jgx-pRMHF.gif",
            "https://cdn.nekotina.com/images/mfDAB8JB.gif",
            "https://cdn.nekotina.com/images/CetXP6p2.gif",
            "https://cdn.nekotina.com/images/9Z6G2GoQ.gif",
            "https://cdn.nekotina.com/images/bHAWWEAp.gif",
            "https://cdn.nekotina.com/images/lMQNSvpa.gif",
            "https://cdn.nekotina.com/images/o3sJc2Vwa.gif",
        
        
        ];
        message.delete().catch()
  
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}, ¡se ha puesto rojo!`)
        .setColor("RANDOM")
        .setImage(vuelo[Math.floor(Math.random() * vuelo.length)])
        
  
        return message.channel.send(embed)
    }
}