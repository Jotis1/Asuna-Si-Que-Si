module.exports = {
    nombre: "coin",
    alias: [],
    run: (client, message, args) => {
        let number = Math.floor(Math.random() * 2);
        if (number === 1){
            message.channel.send('Cara')
        }
        if (number === 0){
            message.channel.send('Cruz')
        }
    }
}