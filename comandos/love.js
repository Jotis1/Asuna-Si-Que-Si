const Discord = require("discord.js")

module.exports = {
    nombre: "love",
    alias: [],
    run: (client, message, args) =>{
        let user = message.mentions.members.first() || message.member;
        let img = message.mentions.users.first();

       

        if(!img) return message.channel.send("Menciona a alguien!")
        if(message.author.id == img.id) return message.channel.send("A ti mismo? Supongo que te querrás un 100% no?")

        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} le ha declarado su amor a ${img.username}`)
        .setDescription(`Siendo sinceros, tienes unas posibilidades del ${Math.floor(Math.random() * 101)}%`)
        .setColor("f3a9ff")
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setImage(user.user.displayAvatarURL({ dynamic: true}))
        
        
        
       
        

        message.channel.send(embed)
    } 
}