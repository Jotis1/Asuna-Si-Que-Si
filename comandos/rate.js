module.exports = {
    nombre: "rate",
    alias: [],
    run: (client, message, args) => {
        let number = Math.floor(Math.random() * 101);
        if (!args[1]){
        return message.channel.send('Te daría un **' +number+'** sobre 100')
        } else {
            let user = message.mentions.users.first();
            if (!user){
                return message.channel.send('Porfavor, incluye a quien quieras puntuar')
            }
            return message.channel.send('Le daría a '+user.username+' un ** ' +number+'** sobre 100')
        }
    }
}