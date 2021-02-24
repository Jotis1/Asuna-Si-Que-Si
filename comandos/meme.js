const Discord = require("discord.js")
const randomPuppy = require("random-puppy")

module.exports = {
    nombre: "meme",
    alias: [],
    run: async (client, message, args) => {
        const meme = ["meme"]
        const random = meme[Math.floor(Math.random() * meme.length)]          

        const img = await randomPuppy(random)
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setImage(img) 
        .setTitle("**Meme:**")
        .setDescription("**Categoría:**" + random)
        message.channel.send(embed) 
    }
}