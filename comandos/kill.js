const Discord = require("discord.js")

module.exports = {
    nombre: "kill",
    alias: [],
    run: (client, message, args) => {
        let miembro = message.mentions.members.first();
        if (message.author.bot) return;
        message.delete().catch()

        const owo = new Discord.MessageEmbed()
        .setTitle(`Intento de suicidio por parte de ${message.author.username}`)
        .setColor("RANDOM")
        .setImage('https://i.imgur.com/zg0MOMI.gif')
        .setDescription('No lo hagas, esa no es la salida...')
        
        if (!miembro) return message.reply("Pero espera, ¡¿A quién quieres matar?!");
        
        if(message.author.id == miembro.id) return message.reply(owo)
        
        let img = message.mentions.users.first();
    
        let gif = [
          "https://cdn.discordapp.com/attachments/399448944889036801/719693759797002250/Kill.gif",
          "https://cdn.discordapp.com/attachments/399448944889036801/651506952152809482/c8279fec-8b6e-43e3-aa98-d81938252061.gif",
          "https://cdn.discordapp.com/attachments/399448944889036801/655839366370951172/b61b4ce0b0f53b2d1e57841dd7b896ab.gif",
          "https://media.giphy.com/media/20KSmo8aJ7HYu5L0rf/giphy.gif",
          "https://cdn.discordapp.com/attachments/604911557276729366/632373542255853587/k2.gif",
          "https://cdn.discordapp.com/attachments/399448944889036801/656904820304904195/7419e422-836a-4c39-a913-662c1544e609.gif",
          "https://cdn.discordapp.com/attachments/399448944889036801/734832331965071580/lwmkG86.gif",
          "https://cdn.discordapp.com/attachments/399448944889036801/568088711263420428/unnamed_5.gif",
          "https://cdn.discordapp.com/attachments/604911557276729366/632372902037028864/descarga.gif",
          "https://cdn.discordapp.com/attachments/604911557276729366/632372902037028864/descarga.gif",
          "https://cdn.discordapp.com/attachments/399448944889036801/608645883487322112/kill.gif",
          "https://cdn.discordapp.com/attachments/399448944889036801/609821384859713606/kill6.gif",
          "https://cdn.discordapp.com/attachments/399448944889036801/655839363623813150/947bf5ae08f8d48d6eec17dd8324b59f.gif",
          "https://cdn.discordapp.com/attachments/399448944889036801/608652401221828638/kill.gif",
        ];
    
        const embed = new Discord.MessageEmbed()
    
          .setTitle(`${message.author.username}, ha acabado con ${img.username}.`)
          .setColor("RANDOM")
          .setImage(gif[Math.floor(Math.random() * gif.length)]);
    
        message.channel.send(embed);
    }
}