const Discord = require("discord.js")

module.exports = {
    nombre: "spank",
    alias: [],
    run: (client, message, args) => {
        let miembro = message.mentions.members.first();
      if (message.author.bot) return;
      message.delete().catch()

      const spank = new Discord.MessageEmbed()
      .setTitle(`${message.author.username}... mejor no hagas eso.`)
      .setColor("RANDOM")
      .setImage('https://cdn.discordapp.com/attachments/735980466267619487/801145452019449896/a1.gif')
      .setDescription('En serio no lo hagas.')

     
  
      if (!miembro) return message.reply("serías tan amable de mencionar a alguien, no pienso hacerlo yo sola.");
      let img = message.mentions.users.first();
      
      if(message.author.id == miembro.id) return message.reply(spank)
      let cachete = [
        "https://cdn.nekotina.com/images/zEUE5Ot_.gif",
        "https://cdn.nekotina.com/images/Aynh_Ri4.gif",
        "https://cdn.nekotina.com/images/M8HHs8WB.gif",
        "https://cdn.nekotina.com/images/oOrNFU-N.gif",
        "https://cdn.nekotina.com/images/VI0P4nD4.gif",
        "https://cdn.nekotina.com/images/CXMkuKKY.gif",
        "https://cdn.nekotina.com/images/gOaYlAqT.gif",
        "https://cdn.nekotina.com/images/3GmXaB3gj.gif",
        "https://cdn.nekotina.com/images/fNGk23pB.gif",
        "https://cdn.nekotina.com/images/euV14EKi.gif",
      ];
  
      const embed = new Discord.MessageEmbed()
  
        .setTitle(`¡${message.author.username} le está dando unos cachetes a ${img.username}!`)
        .setColor("RANDOM")
        .setImage(cachete[Math.floor(Math.random() * cachete.length)])
        .setDescription('Por portarte mal...');
  
      message.channel.send(embed);
    }
}