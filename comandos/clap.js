const Discord = require("discord.js")

module.exports = {
    nombre: "clap",
    alias: [],
    run: (client, message, args) => {
        let miembro = message.mentions.members.first();
      if (message.author.bot) return;
      message.delete().catch()

      const clap1 = new Discord.MessageEmbed()
      .setTitle(`${message.author.username} se iba a aplaudir a sí mismo...`)
      .setColor("RANDOM")
      .setImage('https://cdn.discordapp.com/attachments/735980466267619487/801140598681108580/rikka_mofletes.gif')
      .setDescription('Yo creo que es mejor que te aplaudan otros ¿no?')

     
  
      if (!miembro) return message.reply("primero me tendrás que decir quién es el afortunado al que le vas a aplaudir.");
      let img = message.mentions.users.first();
      
      if(message.author.id == miembro.id) return message.reply(clap1)
      let clap = [
        "https://cdn.discordapp.com/attachments/735980466267619487/801142104490639430/a1.gif",
        "https://cdn.discordapp.com/attachments/735980466267619487/801142336733708308/a1.gif",
        "https://cdn.discordapp.com/attachments/735980466267619487/801142504979955722/a1.gif",
        "https://cdn.discordapp.com/attachments/735980466267619487/801142769913298954/a1.gif",
        "https://cdn.discordapp.com/attachments/735980466267619487/801143372186124288/a1.gif",
        "https://cdn.discordapp.com/attachments/735980466267619487/801143744295731200/a1.gif",
        "https://cdn.discordapp.com/attachments/735980466267619487/801144083778371624/a1.gif",
        "https://cdn.discordapp.com/attachments/735980466267619487/801144329997385738/a1.gif",
        "https://cdn.discordapp.com/attachments/735980466267619487/801144453820579940/a1.gif",
        "https://cdn.discordapp.com/attachments/735980466267619487/801144568950292530/a1.gif",
      ];
  
      const embed = new Discord.MessageEmbed()
  
        .setTitle(`¡${message.author.username} está aplaudiendo a  ${img.username}!`)
        .setColor("RANDOM")
        .setImage(clap[Math.floor(Math.random() * clap.length)])
        .setDescription('Se lo merece.');
  
      message.channel.send(embed);
    }
}