const Discord = require('discord.js')

module.exports = {
    name: 'pomoc',
    description: 'Informacje o komendach.',
    usage: '!pomoc',
    execute: async(message, args) => {
        const embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Oto są moje komendy, pomogą Ci one w lepszym zrozumieniu mnie, ponieważ nie jestem łatwym botem.')
        .addFields(
            {name: '!ban', value: '!ban <user> <powód>'},
            {name: '!kick', value: '!kick <user> <powód>'},
            {name: '!warn', value: '!warn <user> <powód>'},
            {name: '!clear', value: '!clear <ilość> (maks do 50 naraz)'},
            {name: '!kwarantanna', value: '!kwarantanna <user> <powód>'},
        )
        .setFooter({ text: message.author.tag, iconURL: message.author.avatarURL({ dynaimc: true }) });

        const buttons = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
               .setLabel(`Dodaj Bota!`)
               .setStyle(`LINK`)
               .setURL(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
               .setEmoji(`<a:gwiazdka:969672067790290955> `)
        );
    message.channel.send({ embeds: [embed], components: [buttons] });
    }
}