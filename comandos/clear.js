module.exports = {
    nombre: "clear",
    alias: [],
    run: (client, message, args) => {
        let cantidad = args[0]

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return;
        if (!cantidad) return message.channel.send("Ingresa una cantidad. (Menor a 100 mensajes)")
        if (isNaN(cantidad)) return message.channel.send("Pon un número.")
        if (cantidad <= 0) return;
        cantidad = parseInt(cantidad)
        message.channel.bulkDelete(cantidad + 1)
        message.channel.send('Se han borrado ' + cantidad + ' mensajes.').then(msg => msg.delete({timeout: 5000}))
    }
}