module.exports = {
    nombre: "say",
    alias: [],
    run: (client, message, args) => {
        let texto = args.join(" ")
        if (!texto) return message.channel.send("**Ingresa Un Texto**").then(msg => msg.delete({timeout: 5000}))
        message.delete().catch() 
        message.channel.send(texto)
    }
}