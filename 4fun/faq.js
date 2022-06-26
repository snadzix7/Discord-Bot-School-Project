const Discord = require('discord.js')

module.exports = {
    name: 'faq',
    description: 'Najczęściej zadawane pytania',
    usage: '!faq',
    execute: async(message, args) => {
        const buttons = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setLabel('Wsparcie Serwera')
            .setStyle('LINK')
            .setURL('https://paypal.me/snadzix')
            .setEmoji('🔧'),

            new Discord.MessageButton()
            .setCustomId('TestButton2')
            .setLabel('Drużyna Moderacji')
            .setStyle('DANGER')
            .setEmoji('👑'),

            new Discord.MessageButton()
            .setCustomId('TestButton3')
            .setLabel('Regulamin')
            .setStyle('PRIMARY')
            .setEmoji('📜'),

            new Discord.MessageButton()
            .setCustomId('TestButton4')
            .setLabel('Regulamin Serw. Minecraft')
            .setStyle('SUCCESS')
            .setEmoji('🎋'),


            

        );

        message.channel.send({ content: '`Witaj użytkowniku!` W tej wiadomości zawarte są wszystkie informacje dot. serwera! Znajdziesz tu m.in: Serwer Minecraft, Wsparcie Serwera w postaci donate, drużynę moderacji, **REGULAMIN** oraz najczęściej zadawane pytania. ', components: [buttons] });

    }
}