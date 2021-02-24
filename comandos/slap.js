const Discord = require("discord.js")

module.exports = {
    nombre: "slap",
    alias: [],
    run: (client, message, args) => {
        let miembro = message.mentions.members.first();
        if (message.author.bot) return;
        message.delete().catch()

        const awa = new Discord.MessageEmbed()
        .setTitle(`¡No te pegues! ${message.author.username}`)
        .setColor("RANDOM")
        .setImage('https://i.imgur.com/E8C6yNI.gif')
        .setDescription('No te irás a pegar a ti mismo...¿no?')

       
    
        if (!miembro) return message.reply("Pero espera, ¡¿A quién quieres pegar?!");
        let img = message.mentions.users.first();
        
        if(message.author.id == miembro.id) return message.reply(awa)
        let slap = [
          "https://cdn.discordapp.com/attachments/735980466582323353/797188400447881266/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797188573823893504/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797188801792442408/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797188983120723978/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797189162549641226/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797189339121451038/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797189492284325938/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797189617375379546/s1.gif",
          "https://cdn.discordapp.com/attachments/735980466582323353/797189876059340851/s1.gif",
         
        ];
    
        const embed = new Discord.MessageEmbed()
    
          .setTitle(`${message.author.username}, le ha dado una bofetada a ${img.username}.`)
          .setColor("RANDOM")
          .setImage(slap[Math.floor(Math.random() * slap.length)]);
    
        message.channel.send(embed);
    }
}