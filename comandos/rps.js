module.exports = {
    nombre: "rps",
    alias: ["ppt"],
    run: (client, message, args) => {
        
        let choices = ['piedra','papel','tijera']
        if (choices.includes(args[1].toLowerCase())) {
            let number = Math.floor(Math.random() * 3)
            if (number == 1){
                return message.channel.send('Ha sido empate, los dos sacamos ' + (args[1]).toLowerCase())

            }   
            if (number == 2){
                if ((args[1]).toLowerCase() == "piedra" ) {
                    return message.channel.send('He ganado, jeje. Saqué **PAPEL**')
                }
                if ((args[1]).toLowerCase() == "papel" ) {
                    return message.channel.send('He ganado, jeje. Saqué **TIJERA**')
                }
                if ((args[1]).toLowerCase() == "tijera" ) {
                    return message.channel.send('He ganado, jeje. Saqué **PIEDRA**')
                }
                
            }
            if (number == 0){
                if ((args[1]).toLowerCase() == "piedra" ) {
                    return message.channel.send('Has ganado. Seguro que has hecho trampas...¿Cómo supiste que iba a sacar **tijera**?')
                }
                if ((args[1]).toLowerCase() == "papel" ) {
                    return message.channel.send('Has ganado. Seguro que has hecho trampas...¿Cómo supiste que iba a sacar **piedra**?')
                }
                if ((args[1]).toLowerCase() == "tijera" ) {
                    return message.channel.send('Has ganado. Seguro que has hecho trampas...¿Cómo supiste que iba a sacar **papel**?')
                }
            }

        } else {
            return message.channel.send('Porfavor, añade algunas de las siguientes opciones: <piedra/papel/tijera>')
        }
    }
}