const Discord = require("discord.js")

module.exports = {
    nombre: "userinfo",
    alias: ["user"],
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.member;
    
    
        const embed = new Discord.MessageEmbed()
          .setTitle(`${user.user.username}`)
          .setColor(`RANDOM`)
          .setImage("https://images-ext-2.discordapp.net/external/NdhnG_GmVgCdqR5iaRUeWIwRVzORsxq6mIw_0RfG_nc/https/media.discordapp.net/attachments/706850303189975141/707264945661935689/kkkk.gif")
          .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
          .addFields(
            {
              name: "Apodo: ",
              value: user.user.username,
              inline: true
            },
            {
              name: "Discriminador: ",
              value: `${user.user.discriminator}`,
              inline: true
            },
            {
              name: ":id:",
              value: user.user.id
            },
            {
          
  
              name: "Fecha de creación:",
              value: user.user.createdAt.toLocaleDateString("en-us"),
              inline: true
            },
            {
              name: "Fecha de unión:",
              value: user.joinedAt.toLocaleDateString("en-us"),
              inline: true
            },
            {
              name: "Avatar: ",
              value: `[Click Here](${user.user.displayAvatarURL()})`
            },
            {
              name: "Roles Del Usuario",
              value: user.roles.cache.map(role => role.toString()).join(" ,"),
              inline: true
            }
          );
    
        await message.channel.send(embed);
    }
}