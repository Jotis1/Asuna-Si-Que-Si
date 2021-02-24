module.exports = {
    nombre: "secreto3",
    alias: [],
    run: (client, message, args) => {
        message.react('☑️')
        message.channel.send(`6, reloj. 7, foto. 9, mala fortuna`)
    }
}