const Discord = require("discord.js")

module.exports = {
    nombre: "bye",
    alias: [],
    run: (client, message, args) => {
        let vuelo = [
            "https://cdn.discordapp.com/attachments/786982438638714901/801471399280771083/a1.gif",
            "https://cdn.discordapp.com/attachments/786982438638714901/801471676403417088/a1.gif",
            "https://cdn.discordapp.com/attachments/786982438638714901/801471839733809162/a1.gif",
            "https://cdn.discordapp.com/attachments/786982438638714901/801472315094990858/a1.gif",
            "https://cdn.discordapp.com/attachments/774998325141045289/801472890779467796/a1.gif",
            "https://cdn.discordapp.com/attachments/774998325141045289/801473004089507910/a1.gif",
            "https://cdn.discordapp.com/attachments/774998325141045289/801473135109996624/a1.gif",
            "https://cdn.discordapp.com/attachments/774998325141045289/801473287640449034/a1.gif",
            "https://cdn.discordapp.com/attachments/774998325141045289/801473431014866944/a1.gif",
            "https://cdn.discordapp.com/attachments/774998325141045289/801486980398579732/a1.gif",
            "https://cdn.discordapp.com/attachments/774998325141045289/801487513595936778/a1.gif",
            "https://cdn.discordapp.com/attachments/774998325141045289/801487590892896266/PERFILLL.gif",
        
        ];
        message.delete().catch()
  
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} se está despidiendo.`)
        .setColor("RANDOM")
        .setImage(vuelo[Math.floor(Math.random() * vuelo.length)])
        .setFooter("Adiós!")
        
  
        return message.channel.send(embed)
    }
}