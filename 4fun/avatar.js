const Discord = require('discord.js')

module.exports = {
    name: 'avatar',
    description: 'Pokazuje obecny avatar użytkownika',
    usage: '!avatar <@user>',
    execute: async(message, args) => {
        if(!message.member.permissions.has("SEND_MESSAGES")) return;
        let user = null;
        const mention = message.mentions.members.first();

        if(mention) user = mention.user;
        else user = message.author;

        const embed = new Discord.MessageEmbed()
        .setTitle('Avatar')
        .setDescription(`Avatar Uzytkownika ${user}`)
        .setImage(user.avatarURL({ dynamic: true, size: 1024 }))
        .setTimestamp()
        .setFooter(message.author.tag);

        message.channel.send({ embeds: [embed] });
    }
}