const Discord = require('discord.js');

module.exports = {
    name: 'ankieta',
    description: 'ankieta',
    usage: '!ankieta',
    execute: async (message, args) => {
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("Nie posiadasz permisji do użycia tego polecenia! \\🔐")

        const description = args.slice(0).join(" ");
        const embed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('🚨┃Ankieta')
        .setDescription(description)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] }).then(async msg => {
            msg.react("✅")
            msg.react("❌")
        });

        message.channel.send('<@&988859081286615062>')

        message.delete()

    }
}