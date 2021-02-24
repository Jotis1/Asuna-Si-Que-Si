module.exports = {
    nombre: "secret",
    alias: ["secreto"],
    run: (client, message, args) => {
        message.react('❌')
        message.channel.send(`Este no es el comando secreto, secreto, secreto...`)
    }
}