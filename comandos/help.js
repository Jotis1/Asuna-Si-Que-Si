const { Client, MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu')
const client = new Client()


module.exports = {
    nombre: "help",
    alias: ["ayuda"],
    run: (client, message, args) => {
        let helpMenu = new Menu(message.channel, message.author.id, [
            
            {
               
                name: 'Página 1',
              
                content: new MessageEmbed({
                    title: 'AYUDA',
                    description: 'Página 1',
                    color: 'RANDOM',
                    fields: [
                        {
                            name: '8ball', 
                            value: "¡Hazme una pregunta!",
                            inline: false
                        },
                        {
                            name: 'avatar', 
                            value: "Muestra tu avatar o el de otras personas.",
                            inline: false
                        },
                        {
                            name: 'baka', 
                            value: "¡Hm! Baka...",
                            inline: false
                        },
                        {
                            name: 'ban', 
                            value: "Banea a una persona. (Solo moderadores)",
                            inline: false
                        },
                        {
                            name: 'banana', 
                            value: "No pienso decirte qué es lo que hace este comando.",
                            inline: false
                        },
                        {
                            name: 'bye', 
                            value: "¿Ya te vas?",
                            inline: false
                        },
                    ]
                    
                
                }),
              
                reactions: {
                    '⏹️': 'delete',
                    '➡️': 'next'
                }
            },
            {
               
                name: 'Página 2',
              
                content: new MessageEmbed({
                    title: 'AYUDA',
                    description: 'Página 2',
                    color: 'RANDOM',
                    fields: [
                        {
                            name: 'clap', 
                            value: "Aplaude a alguien que se lo merezca.",
                            inline: false
                        },
                        {
                            name: 'clear', 
                            value: "Limpia el chat, que está muy sucio. (Solo moderadores)",
                            inline: false
                        },
                        {
                            name: 'coin', 
                            value: "¿Cara o cruz?",
                            inline: false
                        },
                        {
                            name: 'fly', 
                            value: "¡Vuela libre y muy lejos de aquí!",
                            inline: false
                        },
                        {
                            name: 'kick', 
                            value: "Expulsa a un usuario. (Solo moderadores)",
                            inline: false
                        },
                        {
                            name: 'kill', 
                            value: "Con este comando puedes matar a una persona... pero ¡NO LO HAGAS!",
                            inline: false
                        },
                    ]
                    
                
                }),
              
                reactions: {
                    '⬅️': 'previous',
                    '⏹️': 'delete',
                    '➡️': 'next'
                }
            },
            {
               
                name: 'Página 3',
              
                content: new MessageEmbed({
                    title: 'AYUDA',
                    description: 'Página 3',
                    color: 'RANDOM',
                    fields: [
                        {
                            name: 'kiss', 
                            value: "Besa a alguien UwU.",
                            inline: false
                        },
                        {
                            name: 'like', 
                            value: "Demuestra que te gusta algo (o todo).",
                            inline: false
                        },
                        {
                            name: 'meme', 
                            value: "Un meme, un poco malo pero ya mejorarán...",
                            inline: false
                        },
                        {
                            name: 'normas', 
                            value: "Puedes ir al canal de normas, o poner este comando.",
                            inline: false
                        },
                        {
                            name: 'pat', 
                            value: "Awn, que tierno.",
                            inline: false
                        },
                        {
                            name: 'pout', 
                            value: "Oh vaya, estás poniendo pucheritos.",
                            inline: false
                        },
                    ]
                    
                
                }),
              
                reactions: {
                    '⬅️': 'previous',
                    '⏹️': 'delete',
                    '➡️': 'next'
                }
            },
            {
               
                name: 'Página 4',
              
                content: new MessageEmbed({
                    title: 'AYUDA',
                    description: 'Página 4',
                    color: 'RANDOM',
                    fields: [
                        {
                            name: 'rank', 
                            value: "Mira tu nivel en este servidor.",
                            inline: false
                        },
                        {
                            name: 'rate', 
                            value: "Te puntúo del 1 al 100.",
                            inline: false
                        },
                        {
                            name: 'revive', 
                            value: "Revive a una persona, y no te revivas a ti mismo, no vas a poder...",
                            inline: false
                        },
                        {
                            name: 'rps', 
                            value: "¿Juegas un piedra, papel o tijeras?",
                            inline: false
                        },
                        {
                            name: 'say', 
                            value: "Digo lo que tú dices, ¡vaya locura!",
                            inline: false
                        },
                        {
                            name: 'shoot', 
                            value: "Puedes disparar a una persona, pero no lo hagas (por si acaso).",
                            inline: false
                        },
                    ]
                    
                
                }),
              
                reactions: {
                    '⬅️': 'previous',
                    '⏹️': 'delete',
                    '➡️': 'next'
                }
            },
            {
               
                name: 'Página 5',
              
                content: new MessageEmbed({
                    title: 'AYUDA',
                    description: 'Página 5',
                    color: 'RANDOM',
                    fields: [
                        {
                            name: 'sip', 
                            value: "Dale un sorbito a tu ocha.",
                            inline: false
                        },
                        {
                            name: 'slap', 
                            value: "Una bofetada, ¡¿porqué?!",
                            inline: false
                        },
                        {
                            name: 'sleep', 
                            value: "A mimir.",
                            inline: false
                        },
                        {
                            name: 'social', 
                            value: "Las redes sociales de VictoRuch.",
                            inline: false
                        },
                        {
                            name: 'spank', 
                            value: "Eto... pruébalo tu mismo.",
                            inline: false
                        },
                        {
                            name: 'top', 
                            value: "Mira el top 10 de niveles del servidor.",
                            inline: false
                        },
                    ]
                    
                
                }),
              
                reactions: {
                    '⬅️': 'previous',
                    '⏹️': 'delete',
                    '➡️': 'next'
                }
            },
            {
               
                name: 'Página 6',
              
                content: new MessageEmbed({
                    title: 'AYUDA',
                    description: 'Página 6',
                    color: 'RANDOM',
                    fields: [
                        {
                            name: 'twitch', 
                            value: "Twitch de VictoRuch.",
                            inline: false
                        },
                        {
                            name: 'user', 
                            value: "Mira los detalles tuyos (o de un usuario) en este servidor.",
                            inline: false
                        },
                        {
                            name: 'yt', 
                            value: "Youtube de VictoRuch.",
                            inline: false
                        },
                        {
                            name: 'love', 
                            value: "Declarate a alguien.",
                            inline: false
                        },
                        {
                            name: 'heal', 
                            value: "Cura a alguien.",
                            inline: false
                        },
                        {
                            name: 'jump', 
                            value: "Simplemente, salta.",
                            inline: false
                        },
                    
                    ]
                    
                
                }),
              
                reactions: {
                    '⬅️': 'previous',
                    '⏹️': 'delete',
                    '➡️': 'next'
                    
                }


            },
            {
                name: 'Página 6',
              
                content: new MessageEmbed({
                    title: 'AYUDA',
                    description: 'Página 6',
                    color: 'RANDOM',
                    fields: [
                        {
                            name: 'happy', 
                            value: "Demuestra tu felicidad.",
                            inline: false
                        },
                        {
                            name: 'blush', 
                            value: "M-Me da vergüenza...",
                            inline: false
                        },
                        
                    
                    ]
                    
                
                }),
                reactions: {
                    '⬅️': 'previous',
                    '⏹️': 'delete',
                    
                    
                }

            },
            
         
        ], 300000)
   
        helpMenu.start()
    }
}