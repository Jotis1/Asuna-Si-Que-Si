module.exports = {
    nombre: "ping",
    alias: ["p"],
    run: (client, message, args) => {
        message.channel.send("PONG")
    }
}