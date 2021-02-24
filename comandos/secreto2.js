module.exports = {
    nombre: "secretosecretosecreto",
    alias: [],
    run: (client, message, args) => {
        message.react('❌')
        message.channel.send(`¿En serio?`)
    }
}