///////////////////NO BORRAR///////////////////

const Discord = require("discord.js")
const client = new Discord.Client()
const { Client } = require("discord.js")
const randomPuppy = require("random-puppy")
const request = require('request')
const cheerio = require('cheerio')
const ytdl = require("ytdl-core")
const { YTSearcher } = require("ytsearcher");
const { Player, Queue } = require("discord-player");

const fs = require("fs");
const { isFunction } = require("util")

client.login(process.env.TOKEN)

///////////////////COMANDO READY///////////////////
const prefix = "as!"
client.comandos = new Discord.Collection()

let archivos = fs.readdirSync("./comandos").filter((f) => f.endsWith(".js"))

client.on("ready", () => {

    console.log("Bienvenido a Aincrad") 
    client.user.setPresence({
        status: "online",
        activity: {
            name: "Sword Art Online",
            type: "PLAYING"

        }
    })

})


for(var archi of archivos) {
    let comando = require("./comandos/"+archi)
    client.comandos.set(comando.nombre, comando)
    console.log(archi+" fue cargado correctamente.")
}


client.on('message', async message =>{
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    if(!message.content.startsWith(prefix)) return;
    
    
   
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    let cmd = client.comandos.get(command) || client.comandos.find((c) => c.alias.includes(command))
    if(cmd){
      return cmd.run(client, message, args)
    }  

    if (!message.guild) return;
    if (message.author.bot) return;
    
    ///////////ALGÚN DÍA :C//////////
    
    const levels = require('discord-xp')
    levels.setURL("mongodb+srv://Jotis:71438576rR@cluster0.bqh2z.mongodb.net/Data")
    const mongoose = require('mongoose')
    mongoose.connect('mongodb+srv://Jotis:71438576rR@cluster0.bqh2z.mongodb.net/Data', {useNewUrlParser: true, useUnifiedTopology: true})

    client.on("message", async message => {
    if (!message.guild) return;
    if (message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const randomXp = Math.floor(Math.random() * 9) + 1; //Random amont of XP until the number you want + 1
    const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
    if (hasLeveledUp) {
        const user = await Levels.fetch(message.author.id, message.guild.id);
        message.channel.send(`¡Enhorabuena @${message.author.username}#${message.author.discriminator}! Ahora eres nivel ${user.level}!`);
    }
    
    //Rank
    if(command === "rank") {
        const user = await levels.fetch(message.author.id, message.guild.id);
        const embed = new Discord.MessageEmbed()
        .setColor("00ff2e")
        .setTitle("Nivel")
        .setDescription(`Eres nivel ${user.level}!`)
        message.channel.send(embed);
    }
    
    //Leaderboard
    if(command === "leaderboard" || command === "lb") {
        const rawLeaderboard = await levels.fetchLeaderboard(message.guild.id, 10);
        if (rawLeaderboard.length < 1) return reply("Nadie está en la tabla aún");
        
        const leaderboard = await levels.computeLeaderboard(client, rawLeaderboard); 
        const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`);
        const embed = new Discord.MessageEmbed()
        .setColor("00ff2e")
        .setTitle("Top del Servidor")
        .setDescription(`${lb.join("\n\n")}`)
        message.channel.send(embed);
    }
})
   


})

///////////////////LEVELS/////////////////////

