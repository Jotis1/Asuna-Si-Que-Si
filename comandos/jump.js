const Discord = require("discord.js")

module.exports = {
    nombre: "jump",
    alias: [],
    run: (client, message, args) => {
        let vuelo = [
            "https://imgur.com/R3PEQfy.gif",
            "https://cdn.discordapp.com/attachments/399448944889036801/676629767960920095/Subeturender-Masou-HH-SylviaSilkcutEro01.gif",
            "https://cdn.discordapp.com/attachments/399448944889036801/740653920610680882/bffd93a1-53eb-45cf-bcc6-9459d18e90ce.gif",
            "https://cdn.discordapp.com/attachments/541402053998673950/658925956433707024/tenor_3.gif",
            "https://cdn.discordapp.com/attachments/399448944889036801/753721863552630865/99ac5fd9-9749-4556-a3c2-c763d6e728cf.gif",
            "https://cdn.discordapp.com/attachments/399448944889036801/702700216276746300/496f77c6b6d1570309df94f63bf896f0.gif",
            "https://cdn.discordapp.com/attachments/541402053998673950/658925854096621579/56a83919daa9fc23389977a7c38fca35.gif",
            "https://cdn.discordapp.com/attachments/399448944889036801/784391916837011557/71cba335ecc6bea1720bd48516ee8855.gif",
            "https://imgur.com/VaQpcTg.gif",
            "https://cdn.discordapp.com/attachments/399448944889036801/784393411457056818/77769da002f87ba139827f63478ed761.gif",
            "https://cdn.discordapp.com/attachments/399448944889036801/761954857372090419/c0f7f5c3-1b3d-4515-b361-5407caf0b6e0.gif",
            "https://cdn.discordapp.com/attachments/399448944889036801/751526516416053378/ab18fafe-0f2f-44e9-a9b7-c477a05a5c27.gif",
        
        ];
        message.delete().catch()
  
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}... ¡ESTÁ SALTANDO!.`)
        .setColor("RANDOM")
        .setImage(vuelo[Math.floor(Math.random() * vuelo.length)])
        
  
        return message.channel.send(embed)
    


    }

}