const Discord = require("discord.js")

module.exports = {
    nombre: "banana",
    alias: ["bn"],
    run: (client, message, args) => {
        message.delete().catch()
        let medida = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "100",


        ]
        const tula = new Discord.MessageEmbed()
        .setTitle(`Tu banana mide ${medida[Math.floor(Math.random() * medida.length)]} centímetros`)
        .setColor("RANDOM")
        .setImage("https://cdn.discordapp.com/attachments/746179353829703691/797205740284542976/dibujos-animados-bananas-bailando_53734-29.png")



        message.channel.send(tula)

    }
}