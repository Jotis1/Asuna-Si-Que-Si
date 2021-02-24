const Discord = require("discord.js")

module.exports = {
    nombre: "baka",
    alias: [],
    run: (client, message, args) => {
        let miembro = message.mentions.members.first();
        if (message.author.bot) return;

        if (!miembro) return message.reply("¡Pero no se lo digas al aire! Menciona a un usuario.");
        let img = message.mentions.users.first();

        if(message.author.id == miembro.id){
            return message.reply('ara ara... creo que es mejor que otros te digan "baka".').then(msg => msg.delete({timeout: 5000}))
        }
    
        let gif = [
          "https://cdn.nekotina.com/images/X0yOMpHo.gif",
          "https://cdn.nekotina.com/images/B-eb3P6C.gif",
          "https://cdn.nekotina.com/images/v6xc6kz-.gif",
          "https://cdn.nekotina.com/images/Cdk801x5.gif",
          "https://cdn.nekotina.com/images/4mqtPS9S.gif",
          "https://cdn.nekotina.com/images/1f0zLPz_.gif",
          "https://cdn.nekotina.com/images/p4CJDkq1D.gif",
          "https://cdn.nekotina.com/images/MxYK_t8i.gif",
          "https://cdn.nekotina.com/images/4y9uvMDq.gif",
          "https://cdn.nekotina.com/images/VGjyfXKQ.gif",
          "https://cdn.nekotina.com/images/6jpA5Zepb.gif",
          "https://cdn.nekotina.com/images/6H-wmcT4.gif",
          "https://cdn.nekotina.com/images/ee4Giwqe.gif",
          "https://cdn.nekotina.com/images/AzXjB2mM.gif"
        ];
    
        const embed = new Discord.MessageEmbed()
    
          .setTitle(`${message.author.username}, ha llamado **BAKA** a ${img.username}.`)
          .setColor("RANDOM")
          .setImage(gif[Math.floor(Math.random() * gif.length)]);
    
        message.channel.send(embed);
    }
    
}