const Discord = require("discord.js")

module.exports = {
    nombre: "shoot",
    alias: ["disparar"],
    run: (client, message, args) => {
        let miembro = message.mentions.members.first();
      if (message.author.bot) return;
      message.delete().catch()

      const iwi = new Discord.MessageEmbed()
      .setTitle(`¡${message.author.username}! No te puedes disparar a tí mismo.`)
      .setColor("RANDOM")
      .setImage('https://cdn.discordapp.com/attachments/751963091948011550/799658371141730335/unknown.png')
      .setDescription('¿Realmente pensabas hacerlo?')

     
  
      if (!miembro) return message.reply("Pero espera, ¡¿A quién ibas a disparar?!");
      let img = message.mentions.users.first();
      
      if(message.author.id == miembro.id) return message.reply(iwi)
      let pat = [
        "https://cdn.discordapp.com/attachments/751963091948011550/799655183336079401/74761df0b2dd97c3cfd364e71d0af021.gif",
        "https://cdn.discordapp.com/attachments/751963091948011550/799655211438309376/tumblr_n92tdbLW1p1qm5nqro2_500.gif",
        "https://cdn.discordapp.com/attachments/751963091948011550/799655252319535104/Tridente_1.gif",
        "https://cdn.discordapp.com/attachments/751963091948011550/799655372431556650/Decomposition-under-Cast-Jamming-AN-Ep07.gif",
        "https://cdn.discordapp.com/attachments/751963091948011550/799655406908866621/tumblr_ncktr1b23V1qa94xto1_500.gif",
        "https://cdn.nekotina.com/images/jDc8cpL0.gif",
        "https://cdn.nekotina.com/images/omXX6jH9.gif",
        "https://cdn.nekotina.com/images/Soq0jq9k.gif",
        "https://cdn.nekotina.com/images/2SUyXzZU.gif",
        "https://cdn.nekotina.com/images/AvRT2f80.gif",
        "https://cdn.nekotina.com/images/5_WgtqZD.gif",
        "https://cdn.nekotina.com/images/n7drP0_2.gif",
       
      ];
  
      const embed = new Discord.MessageEmbed()
  
        .setTitle(`${message.author.username} ha disparado a ${img.username}.`)
        .setColor("RANDOM")
        .setImage(pat[Math.floor(Math.random() * pat.length)]);
  
      message.channel.send(embed);
    }
}