module.exports = {
    nombre: "ban",
    alias: [],
    run: (client, message, args) => {
        if (message.member.hasPermission('BAN_MEMBERS') || message.member.hasPermission("ADMINISTRATOR")){
            if (!args[1]){
                message.react('❓')
                return message.channel.send('Primero dime a quién vas a banear')
            }
            var user = message.mentions.members.first();
            user.ban().then((user)=> {
                message.react('✅')
                message.channel.send('Su nivel de maldad... ¡era absoluto!')
            }).catch(() => {
                message.channel.send('No he podido banearlo... ¡¿Cómo es posible?!')
            })
        }else{
            message.react('🚫')
            return message.channel.send('De verdad querías banear a otra persona... ¡¿TAN MALO ERES?!')
            }
    }
}