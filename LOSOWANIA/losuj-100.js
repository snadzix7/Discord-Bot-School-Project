const Discord = require('discord.js')

module.exports = {
    name: 'losuj100', 
    description: 'losuje liczbe',
    usage: '!losuj',
    execute: async(message, args) => {

        const min = Math.ceil("1");
        const max = Math.floor("100");
        const losuj = Math.floor(Math.random() * (max - min)) + min

        const embed = new Discord.MessageEmbed()
        .setColor('#f5410a')
        .setTitle(':white_check_mark: `Losowanie`')
        .setURL('https://discord.gg/rW6Zwse8tU')
        .setDescription(`<a:rczka:969672110559608852> Wylosowana liczba to **${+losuj}**`)
        .setTimestamp()
        .setFooter({text: message.author.tag, iconURL: message.author.iconURL})

        message.channel.send({ embeds: [embed] })
    }
}   