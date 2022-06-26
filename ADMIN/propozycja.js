const Discord = require('discord.js');

module.exports = {
    name: 'pomysł',
    description: 'ankieta',
    usage: '!pomysł',
    execute: async (message, args) => {
        
        const description = args.slice(0).join(" ");


        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Propozycja')
        .setDescription(description)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL({ dynaimc: true }));

        message.channel.send({ embeds: [embed] }).then(async msg => {
            msg.react("✅")
            msg.react("❌")
        });
    }
}