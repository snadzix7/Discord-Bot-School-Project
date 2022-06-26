const Discord = require('discord.js')

module.exports = {
    name: 'destroy',
    description: 'Hakiermen zniszy si kompiutera sa',
    usage: '!zhakuj-konto <@user>',
    execute: async(message, args) => {
        if(!message.member.permissions.has("SEND_MESSAGES")) return;
        let user = null;
        const mention = message.mentions.members.first();

        if(mention) user = mention.user;
        else user = message.author;

        const embed = new Discord.MessageEmbed()
        .setTitle(`Konto zostanie przekazne snadzix'owi do 3 dni roboczych.`)
        .setColor('GREYPLE')
        .setDescription(`Użytkownik ${user} został zhakowany przez Flopper'a 🎈✨`)
        .setImage('https://media.giphy.com/media/V4NSR1NG2p0KeJJyr5/giphy.gif')
        .setTimestamp('Łatwo...')
        .setFooter(message.author.tag);

        message.channel.send({ embeds: [embed] });
    }
}