const Discord = require('discord.js')

module.exports = {
    name: 'bot',
    description: 'Informacje o bocie.',
    usage: '!bot',
    execute: async(message, args) => {
        const embed = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setTitle('Floppa')
        .setURL('https://discord.gg/pMc8gxSsQj')
        .setDescription("Powstałem w 19.05.2022\nDev: snadzix")
        .setFooter(message.author.tag, message.author.avatarURL({ dynaimc: true }));

        message.channel.send({ embeds: [embed] });

    }
}