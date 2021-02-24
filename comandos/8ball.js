module.exports = {
    nombre: "8ball",
    alias: [],
    run: (client, message, args) => {
        if (!args[2]){
            return message.channel.send('Porfavor, ¿puedes añadir una pegunta?')

        }
        let number = Math.floor(Math.random() * 9);
        if (number == 0){
            return message.channel.send('Sí, no me cabe la menor duda.')
        }
        if (number == 1){
            return message.channel.send('No creo.')
        }
        if (number == 2){
            return message.channel.send('No se como decirte esto... ehmm. NO.')
        }
        if (number == 3){
            return message.channel.send('Depende de tú ya sabes que.')
        }
        if (number == 4){
            return message.channel.send('Seguramente.')
        }
        if (number == 5){
            return message.channel.send('Vuelve a decir eso y le digo a Kirito que te banee.')
        }
        if (number == 6){
            return message.channel.send('Pregúntalo más tarde.')
        }
        if (number == 7){
            return message.channel.send('No lo tienes nada a tu favor.')
        }
        if (number == 8){
            return message.channel.send('Lo tienes a tu favor.')

        }
    }
}