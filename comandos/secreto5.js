module.exports = {
    nombre: "as",
    alias: [],
    run: (client, message, args) => {
        message.react('☑️')
        message.channel.send(`secreto = A`)
    }
}