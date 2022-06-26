const Discord = require('discord.js')

module.exports = {
    name: 'iq', 
    description: 'Liczy twoje IQ.',
    usage: '!iq',
    execute: async(message, args) => {

        const kubus = args.join(" ");
        let user = null;
        const mention = message.mentions.members.first();

        if(mention) user = mention.user;
        else user = message.author;

        const min = Math.ceil("-10");
        const max = Math.floor("300");
        const losuj = Math.floor(Math.random() * (max - min)) + min

        const embed = new Discord.MessageEmbed()
        .setColor('BLACK')
        .setTitle(':white_check_mark: `Losowanie`')
        .setURL('https://discord.gg/rW6Zwse8tU')
        .setDescription(`<a:rczka:969672110559608852> Iq użytkownika ${user} wynosi **${+losuj}**`)
        .setTimestamp('pierdol sie')
        .setFooter({text: message.author.tag, iconURL: message.author.iconURL})

        message.channel.send({ embeds: [embed] })

        const embed2 = new Discord.MessageEmbed()
        .setColor('BLACK')
        .setURL('https://discord.gg/rW6Zwse8tU')
        .setDescription(`<a:rczka:969672110559608852> Iq użytkownika ${user} wynosi **-1**`)
        .setTimestamp('pierdol sie')
        .setFooter({text: message.author.tag, iconURL: message.author.iconURL})

        if(kubus === 'XD') {
            message.channel.send(embed2)
        }
    }
}    