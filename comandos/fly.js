const Discord = require("discord.js")

module.exports = {
    nombre: "fly",
    alias: [],
    run: (client, message, args) => {
        let vuelo = [
            "https://cdn.discordapp.com/attachments/399448944889036801/750704023094689852/4c3600ea-7cf0-4622-bca5-a890f5c7301f.gif",
            "https://cdn.discordapp.com/attachments/541402053998673950/707462218303668258/3.gif",
            "https://cdn.discordapp.com/attachments/399448944889036801/750703063739793438/ae85acb5-f604-4222-ae54-d030bf1d79a8.gif",
            "https://cdn.discordapp.com/attachments/541402053998673950/707462261974892544/2.gif",
            "https://imgur.com/XAXexvL.gif",
            "https://imgur.com/hEFe2bt.gif",
            "https://cdn.discordapp.com/attachments/399448944889036801/735831181412532264/81155f3a-bcb1-420d-a494-8d59383af51f.gif",
            "https://cdn.discordapp.com/attachments/399448944889036801/718175793942888478/91e172d6d2dc7f9eeb9ccb6248c424b4.gif",
            "https://cdn.discordapp.com/attachments/399448944889036801/763403392970129438/ezgif.com-gif-maker.gif",
            "https://cdn.discordapp.com/attachments/541402053998673950/707462396062597160/12.gif",
            "https://cdn.discordapp.com/attachments/541402053998673950/707462283277762590/7.gif",
            "https://cdn.discordapp.com/attachments/399448944889036801/769038538124951562/dfd7cdaa78940f3dbdd80cdd294c4881.gif",
        
        ];
        message.delete().catch()
  
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}... ¡ESTÁ VOLANDO!.`)
        .setColor("RANDOM")
        .setImage(vuelo[Math.floor(Math.random() * vuelo.length)])
        
  
        return message.channel.send(embed)
    }
}