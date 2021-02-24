const { Client, MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu')
const client = new Client()

module.exports = {
    nombre: "8881120588811205",
    alias: [],
    run: (client, message, args) => {
        let helpMenu = new Menu(message.channel, message.author.id, [
            
            {
               
                name: 'Help',
              
                content: new MessageEmbed({
                    title: '¿Darling in the FranXX?',
                    description: 'El primer número que se me viene a la cabeza es... ¿Zero Two?',
                    color: 'RANDOM',
                    
                
                }),
              
                reactions: {
                    '⏹️': 'delete',
                    '➡️': 'Hi'
                }
            },
            {
                name: 'Hi',
                content: new MessageEmbed({
                    title: 'Novelas ligeras de SAO.',
                    description: 'Cuenta las novelas ligeras que tiene SAO... ¡25!',
                    color: 'RANDOM',
                }),
                reactions: {
                    '⬅️': 'Help',
                    '⏹️': 'delete', 
                    '➡️': 'Meme'
                    
                }
                
            },
            {
                name: 'Meme',
                content: new MessageEmbed({
                    title: 'Evangelion: Asuka.',
                    description: '14. La edad de Asuka.',
                    color: 'RANDOM',
                }),
                reactions: {
                    '⬅️': 'Hi',
                    '⏹️': 'delete',
                    '➡️': 'Say'
                }
                
            },
            {
                name: 'Say',
                content: new MessageEmbed({
                    title: 'Administradora: Yui',
                    description: 'Yui (Sword Art Online) salió por primera vez en el capítulo número 11 del anime. ',
                    color: 'RANDOM',
                }),
                reactions: {
                    '⬅️': 'Meme',
                    '⏹️': 'delete' ,
                    '➡️': 'Yt'
                }
                
            },
            {
                name: 'Yt',
                content: new MessageEmbed({
                    title: '¿Cuántas letras tiene tu nombre?',
                    description: 'Tu nombre... **Kimi no na wa**... en realidad tiene 10 letras',
                    color: 'RANDOM',
                }),
                reactions: {
                    '⬅️': 'Say',
                    '⏹️': 'delete',
                    '➡️': 'Twitch'
                }
                
            },
            {
                name: 'Twitch',
                content: new MessageEmbed({
                    title: 'Kono Yo no Hate...0112',
                    description: 'Vete al capítulo 3 de Kono Yo No Hate, en el minuto 01:12 tienes un reloj que marca las 22:00/10:00, dale la vuelta de forma horizontal a la manecilla de los minutos y dime que te marca... o sí, un ¡2!',
                    color: 'RANDOM',
                }),
                reactions: {
                    '⬅️': 'YT',
                    '⏹️': 'delete', 
                    '➡️': 'Normas'
                }
                
            },
            {
                name: 'Normas',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'La princesa de la Luna, en su segunda versión, los dos primeros números sobre la segunda persona...',
                    description: 'Capítulo número 12 de la segunda temporada de Kaguya-sama. Cuando Kaguya mira su móvil y vé una foto de ella con Miko. Encima de ellas marca la hora... las ¡21!',
                }),
                reactions: {
                    '⬅️': 'YT',
                    '⏹️': 'delete',
                    '➡️': '782'
                
                }
                
            },
            {
                name: '782',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'El mundo se acabará pronto. El mundo se acabará pronto. El mundo se acabará pronto.',
                    description: 'Lo he repetido 3 veces... no es coincidencia. El capítulo 3 de Kamisama Ni Natta Hi marca que quedan **17** días...',
                }),
                reactions: {
                    '⬅️': 'Normas',
                    '⏹️': 'delete' ,
                    '➡️': '8ball'
                }
                
            },
            {
                name: '8ball',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: '**SHINE**',
                    description: 'El Shine, significa muerte en japonés (o más bien morir). Eso da mala suerte, al igual que el número 4. **04**',
                }),
                reactions: {
                    '⬅️': '782',
                    '⏹️': 'delete',
                    '➡️': 'Coin'
                }
                
            },
            {
                name: 'Coin',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: '¿Amas la vida? Yo amo Los Alpes suizos... las mejores medidas de todas.',
                    description: 'Love Live no significa "Amar la vida", pero se sobreentiende que eso es. Emma Verde es la única suiza del anime, y sus medidad son la respuesta: "92 61 88"',
                }),
                reactions: {
                    '⬅️': '8ball',
                    '⏹️': 'delete',
                    '➡️': 'Rate'
                }
                
            },
            {
                name: 'Rate',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'La primera de muchas muertes, sujetó su mano. Poco importaban ya los segundos...',
                    description: 'Cuando Subaru muere en el capítulo 1, agarra la mano de Emilia. Los segundos no importan, y el minuto era el **20**, así que esa es la respuesta',
                }),
                reactions: {
                    '⬅️': 'Coin',
                    '⏹️': 'delete',
                    '➡️': 'RPS'
                }
                
            },
            {
                name: 'RPS',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: '¿El final de SAO?',
                    description: 'El último piso que se pasan en Aincrad es el **75**, fácil.',
                }),
                reactions: {
                    '⬅️': 'Rate',
                    '⏹️': 'delete', 
                    '➡️': 'Social'
                }
                
            },
            {
                name: 'Social',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'Tiburón',
                    description: 'Gawr Gura. Su debut fué el 13 de Septiembre de 2020. 13092020',
                }),
                reactions: {
                    '⬅️': 'RPS',
                    '⏹️': 'delete', 
                    '➡️': 'Kiss'
                }
                
            },
            {
                name: 'Kiss',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'Trío. Las poses más raras, las apuestas más arriesgadas.',
                    description: 'Poses... JoJo. Temporada 3 capítulo 35, trío de 10. **101010**',
                }),
                reactions: {
                    '⬅️': 'Social',
                    '⏹️': 'delete', 
                    '➡️': 'Kill'
                }
                
            },
            {
                name: 'Kill',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'Vivo en la realidad pero cuando quiero vivo en otro mundo.',
                    description: 'Se refiere a Chuunibyou. Síndrome de Octavo Grado: **8**',
                }),
                reactions: {
                    '⬅️': 'Kiss',
                    '⏹️': 'delete', 
                    '➡️': 'Avatar'
                }
                
            },
            {
                name: 'Avatar',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: '¿El final es el comienzo, y el comienzo es el final, encontrará a la de sus recuerdos? ¿Cuántos son?',
                    description: '¿Un anime en el que el comienzo del anime sea igual al del final? Efectivamente, Gotoubun no Hanayome. Encontrará a la de sus recuerdos se refiere a Futaro. En total ellos son **6**. ',
                }),
                reactions: {
                    '⬅️': 'Kill',
                    '⏹️': 'delete', 
                    '➡️': '0'
                }
                
            },
            {
                name: '0',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'Vivo en la realidad pero cuando quiero vivo en otro mundo.',
                    description: 'Se refiere a Chuunibyou. Síndrome de Octavo Grado: **8**',
                }),
                reactions: {
                    '⬅️': 'Avatar',
                    '⏹️': 'delete', 
                    '➡️': '1'
                }
                
            },
            {
                name: '1',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'Monster. Monster. Monster. Monster... Una maldición.',
                    description: 'Monster, Monster, Monster, Monster es la última frase del OP 6 de Shingeki No Kyojin. La maldición es la maldición de los 13 años de los herederos de los titanes.',
                }),
                reactions: {
                    '⬅️': '0',
                    '⏹️': 'delete', 
                    '➡️': '2'
                }
                
            },
            {
                name: '2',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'Las mentiras están prohibidas. Los **triángulos** no...',
                    description: 'Koi To Uso tiene un porcentaje de Triángulo Romántico del **97**%.',
                }),
                reactions: {
                    '⬅️': '1',
                    '⏹️': 'delete', 
                    '➡️': '3'
                }
                
            },
            {
                name: '3',
                content: new MessageEmbed({
                    color: 'RANDOM',
                    title: 'Bienvenido a la que pueda ser la pregunta más difícil del juego. Haz lo que quieras con esto: 35°42′27″N 139°39′50″E',
                    description: '¡Venga ya! Nunca le diré esta respuesta a nadie. No puedes ganar el juego sin hacer nada. Simplemente haz algo y sácalo. ',
                }),
                reactions: {
                    '⬅️': '2',
                    '⏹️': 'delete', 
                }
                
            }
            
            
            
         
        ], 300000)
   
        helpMenu.start()
    }
}