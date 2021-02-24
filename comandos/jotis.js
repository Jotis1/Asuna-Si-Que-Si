const Discord = require("discord.js")

module.exports = {
    nombre: "yotsuba",
    alias: [],
    run: async(client, message, args) => {

        const JOTIS = new Discord.MessageEmbed()
        .setTitle('Yotsuba Besto Wafle')
        .setDescription('Enhorabuena, acabas de descubrir que Yotsuba es la besto wafle del anime. Y como recompensa por ello puedes reaccionar al emoji de abajo, para que te dé el rango de Yotsuba Lover, a no ser que no seas digno...')
        .setImage('https://cdn.discordapp.com/attachments/785572450808102962/800812961760804874/Yotsuba_uwu.gif')
        .setColor('RANDOM')
        const prefix = "as!"

        client.on('message', async message => {
            if (message.content.startsWith(`${prefix}yotsuba`)){
                const msg = await message.channel.send(JOTIS)
                msg.react('🎀')
                message.delete()
        
            }
        })

        client.on('messageReactionAdd', async (reaction, user) =>{
            if(reaction.message.partial) await reaction.message.fetch()
            if(reaction.partial) await reaction.fetch()
            if(user.bot) return
            if(reaction.emoji.name === "🎀") await reaction.message.guild.members.cache.get(user.id).roles.add('800813386639081522')     
             
        })

        client.on('messageReactionRemove', async (reaction, user) =>{
            if(reaction.message.partial) await reaction.message.fetch()
            if(reaction.partial) await reaction.fetch()
            if(user.bot) return
        
                
            if(reaction.emoji.name === "🎀") await reaction.message.guild.members.cache.get(user.id).roles.remove('800813386639081522')        
            
        })

            
    }

}

