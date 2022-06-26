const Discord = require('discord.js')

module.exports = {
    name: 'cycki',
    description: 'cycki użytkownika',
    usage: '!cycki <@user>',
    execute: async(message, args) => {
        if(!message.member.permissions.has("SEND_MESSAGES")) return;
        let user = null;
        const mention = message.mentions.members.first();

        if(mention) user = mention.user;
        else user = message.author;

        const embed = new Discord.MessageEmbed()
        .setTitle('BOOBIES!!')
        .setDescription(`Cycuszki użytkownika  ${user}`)
        .setImage('https://cdn.discordapp.com/attachments/981568524986249327/985589586875007036/boobs.png')
        .setTimestamp()
        .setFooter(message.author.tag);

        message.channel.send({ embeds: [embed] });
    }
}