const ytdl = require('ytdl-core');
const Discord = require('discord.js');

module.exports = {
        name: 'graj',

    execute: async (client, message, args) => {

        const embed1 = new Discord.MessageEmbed()
            .setTitle('Coś poszło nie tak!')
            .setDescription(`Nie jesteś na kanale głosowym !`)
            .setColor('BLACK')
            .setTimestamp()

        const embed2 = new Discord.MessageEmbed()
            .setTitle('Coś poszło nie tak!')
            .setDescription(`Nie jesteś na kanale głosowym!`)
            .setColor('BLACK')
            .setTimestamp()

        const embed3 = new Discord.MessageEmbed()
            .setTitle('Coś poszło nie tak!')
            .setDescription(`Proszę podać zapytanie !`)
            .setColor('DARK_RED')
            .setTimestamp()

        if (!message.member.voice.channel) return message.reply(embed1);
        if (message.guild.me.voice.channel && message.guild.me.voice.channelID !== message.member.voice.channelID) return message.reply(embed2);

        const query = args.join(" ");
        if (!query) return message.reply(embed3);

        await client.player.play(message, query, true);
        },
};