const Discord = require("discord.js")

module.exports = {
    nombre: "kiss",
    alias: [],
    run: (client, message, args) => {
        let miembro = message.mentions.members.first();
        if (message.author.bot) return;

        if (!miembro) return message.reply("Menciona a quien quieras besar...");
        let img = message.mentions.users.first();

        if(message.author.id == miembro.id){
            message.react('😐')
            return message.reply('¿Te ibas a besar a tí mismo?')
        
        }
    
        let gif = [
          "https://i.pinimg.com/originals/6e/4f/fe/6e4ffe54a38656cda96ba3eec67c84b4.gif",
          "https://i.pinimg.com/originals/af/72/c6/af72c6957086d85e90b3fb013cc8dbc6.gif",
          "https://i.pinimg.com/originals/d4/dc/09/d4dc09375712a7ed678c9a317f76ad40.gif",
          "https://www.eldictamen.mx/wp-content/uploads/2018/05/b920a74debe339ff75dc5c4abbbeaa1e1df390ab_hq.gif",
          "https://data.whicdn.com/images/336064534/original.gif",
          "https://pa1.narvii.com/6138/a41eab1e8372bc86a7e8ebe0ac009e7cc5120615_00.gif",
          "https://i.pinimg.com/originals/1b/29/37/1b2937a042cbb6ca6039d802e19fe2a7.gif",
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Far.pinterest.com%2Fpin%2F765893480366805180%2F&psig=AOvVaw38hv-dRUJXvwywRUcBmws1&ust=1602234967956000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICG0sTUpOwCFQAAAAAdAAAAABAU",
          "https://www.imagenesdeamor.pro/wp-content/uploads/2015/05/beso-robado-sonrojado.gif",
          "https://i.pinimg.com/originals/04/01/df/0401df1ea3a1e76aafd49042c4f49f7f.gif",
          "https://media1.tenor.com/images/b5c62ff190424e0126af020546d7c36b/tenor.gif?itemid=17026176",
          "https://i.pinimg.com/originals/79/65/2f/79652fcb0b607135dd85573866bb427f.gif",
          "https://steamuserimages-a.akamaihd.net/ugc/159151753790585235/30F9449B09E36F4FADF80175EB892F46E74948D9/",
          "https://media1.tenor.com/images/5d04ae7eea2f16f127348dd44c55317c/tenor.gif?itemid=6007659"
        ];
    
        const embed = new Discord.MessageEmbed()
    
          .setTitle(`${message.author.username}, ha besado a ${img.username}.`)
          .setColor("RANDOM")
          .setImage(gif[Math.floor(Math.random() * gif.length)]);
    
        message.channel.send(embed);
    }
    
}