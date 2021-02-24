const Discord = require("discord.js")

module.exports = {
    nombre: "pat",
    alias: [],
    run: (client, message, args) => {
        let miembro = message.mentions.members.first();
        if (message.author.bot) return;
        message.delete().catch()

        const iwi = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} se ha acariciado a si mismo.`)
        .setColor("RANDOM")
        .setImage('https://pa1.narvii.com/6345/1afca296924552f201983742f98d310e2054839b_hq.gif')
        .setDescription('¿Tan solo te sientes?')

       
    
        if (!miembro) return message.reply("Pero espera, ¡¿A quién quieres darle amor?!");
        let img = message.mentions.users.first();
        
        if(message.author.id == miembro.id) return message.reply(iwi)
        let pat = [
          "https://cdn.discordapp.com/attachments/735980466582323353/797195143563706398/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797195402520428566/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797195656392605696/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797195861758836756/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797196029652500541/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797196169150201876/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797196495454732288/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797196627664175165/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797197093516345404/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797197371548368896/s1.gif",
          "https://cdn.discordapp.com/attachments/746179353829703691/797197376343375872/pat_1.gif",
          "https://cdn.discordapp.com/attachments/746179353829703691/797197557452243025/pat_2.gif",
         
        ];
    
        const embed = new Discord.MessageEmbed()
    
          .setTitle(`${message.author.username}, le ha dado amor a ${img.username}.`)
          .setColor("RANDOM")
          .setImage(pat[Math.floor(Math.random() * pat.length)]);
    
        message.channel.send(embed);
    }
}