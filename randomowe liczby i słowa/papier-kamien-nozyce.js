const { Discord, MessageEmbed, } = require('discord.js')

module.exports = {
    name: "rps1",
    description: "Gra w paier, kamień nożycze!",
    execute: async (client, message, cmd, args, Discord) => {
        let embedrps = new MessageEmbed()
        .setTitle('RPS')
        .setDescription('Zareaguj aby grać!')
        .setTimestamp()
        let msg = await message.channel.send({embeds: [embedrps]})
        await msg.react('🪨')
        await msg.react('📰')
        await msg.react('✂️')

        const filter = (reaction, user) => {
            return ['🪨, 📰, ✂️'].includes(reaction.emoji.name) && user.id === message.author.id

        }
        const choices = ['🪨, 📰, ✂️']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max: 1, time: 60000, error: ['time']}).then(
            async(collected) => {
                const reaction = collected.first()
                let result = new MessageEmbed()
                .setTitle('Wynik')
                .addField('Wybrałeś', `${reaction.emoji.name}`)
                .addField('Wybrałem', `${me}`)
                await msg.edit({embeds: [result]})

                if((me === '🪨' && reaction.emoji.name === "✂️") ||
                (me === '✂️' && reaction.emoji.name === "📰") ||
                (me === '📰' && reaction.emoji.name === "🪨")) {
                    message.reply('Przegrałeś!')
                } else if (me === reaction.emoji.name) {
                    return message.reply('Remis!')
                } else {
                    return message.reply('Wygrałeś!')
                }
            }).catch(collected => {
                message.reply('Nie zdązyleś')
            })
    }
}