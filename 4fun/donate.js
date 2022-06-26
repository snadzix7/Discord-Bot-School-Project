const Discord = require('discord.js')

module.exports = {
    name: 'donate',
    description: 'Wyślij pieniądze.',
    usage: '!donate',
    execute: async(message, args) => {
        const buttons = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setLabel('DONATE')
            .setStyle('LINK')
            .setURL('https://paypal.me/snadzix')
            .setEmoji('🎉'),


            

        );

        message.channel.send({ content: ':tada: DONATE :tada:', components: [buttons] });

    }
}