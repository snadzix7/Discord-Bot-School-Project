const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    description: 'ping bota',
    usage: '!ping',
        execute: async (message, args, client) => {
            message.channel.send('`Już sprawdzam ping!`').then((msg) => {
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(msg.createdTimestamp - message.createdTimestamp + 'ms' )
            .setFooter(message.author.tag, message.author.avatarURL({ dynaimc: true }));
            message.channel.send({ embeds: [embed] });

            }
            )}
            }
        