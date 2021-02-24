const Discord = require("discord.js")

module.exports = {
    nombre: "revive",
    alias: [],
    run: (client, message, args) => {
        let miembro = message.mentions.members.first();
      if (message.author.bot) return;
      message.delete().catch()

      const iwi = new Discord.MessageEmbed()
      .setTitle(`¡${message.author.username}! No puedes hacer eso`)
      .setColor("RANDOM")
      .setImage('https://cdn.discordapp.com/attachments/735980466267619487/801139432237039656/aqua_llorando.gif')
      .setDescription('Ni siquiera es posible...')

     
  
      if (!miembro) return message.reply("Pero espera, ¡¿A quién quieres revivir?!");
      let img = message.mentions.users.first();
      
      if(message.author.id == miembro.id) return message.reply(iwi)
      let pat = [
        "https://cdn.discordapp.com/attachments/541402053998673950/606206277433032704/tenor_1.gif",
        "https://imgur.com/6XuuPCi.gif",
        "https://cdn.discordapp.com/attachments/541402053998673950/606206173808427030/original_1.gif",
        "https://cdn.discordapp.com/attachments/541402053998673950/606206189872742474/tumblr_inline_ot3heqGyju1uvbeib_540.gif",
        "https://cdn.discordapp.com/attachments/541402053998673950/606206217748217926/ec87d55c8a58fae220eb62a37da4c6259ef894ef_00.gif",
        "https://cdn.discordapp.com/attachments/541402053998673950/606206291949649950/2rx3lgo1bpj01.gif",
        "https://cdn.discordapp.com/attachments/399448944889036801/673021422276313099/f7f8c213-cc68-4815-965a-1eebb1c0480c.gif",
        "https://cdn.discordapp.com/attachments/541402053998673950/606206149905350686/tumblr_mwq2uu7KzD1rnm2nso3_250.gif",
      ];
  
      const embed = new Discord.MessageEmbed()
  
        .setTitle(`¡${message.author.username} está reviviendo a  ${img.username}!`)
        .setColor("RANDOM")
        .setImage(pat[Math.floor(Math.random() * pat.length)]);
  
      message.channel.send(embed);
    }
}