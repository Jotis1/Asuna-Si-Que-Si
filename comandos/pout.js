const Discord = require("discord.js")

module.exports = {
    nombre: "pout",
    alias: [], 
    run: (client, message, args) => {
        let img = [
            "https://cdn.nekotina.com/images/2PkjFRdah.gif",
            "https://cdn.nekotina.com/images/3MvCo8nX.gif",
            "https://cdn.nekotina.com/images/sm6imQcE.gif",
            "https://cdn.nekotina.com/images/gQw0px0L.gif",
            "https://cdn.nekotina.com/images/dsDOllntw.gif",
            "https://cdn.nekotina.com/images/3pdlIcH_.gif",
            "https://cdn.nekotina.com/images/WxLqhyGo.gif",
            "https://cdn.nekotina.com/images/7W-hc3VF.gif",
            "https://cdn.nekotina.com/images/PP1l4Owex.gif",
            "https://cdn.nekotina.com/images/6LlJpVGi.gif",
            "https://cdn.nekotina.com/images/opoxLQMr.gif",
            "https://cdn.nekotina.com/images/nvTJPDFo.gif",
        
        ];

        message.delete().catch()

        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} está poniendo pucheritos.`)
        .setColor("RANDOM")
        .setImage(img[Math.floor(Math.random() * img.length)])
        

        return message.channel.send(embed) 

     

    }

}