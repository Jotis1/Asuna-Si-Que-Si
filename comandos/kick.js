module.exports = {
    nombre: "kick",
    alias: [],
    run: (client, message, args) => {
        if (message.member.hasPermission('KICK_MEMBERS') || message.member.hasPermission("ADMINISTRATOR")){
            if (!args[1]){
                message.react('❓')
                return message.channel.send('Primero dime a quién vas a expulsar')
            }
            var user = message.mentions.members.first();
            user.kick().then((user)=> {
                message.react('✅')
                message.channel.send('Eso le pasó por hacer cosas malas...')
            }).catch(() => {
                message.channel.send('No he podido expulsarlo... ¡¿Cómo es posible?!')
            })
        }else{
            message.react('🚫')
            return message.channel.send('Oh, no seas malo. Solo los administradores pueden expulsar a otras personas')
            }
    }
}