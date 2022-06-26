const { MessageEmbed } = require('discord.js');

module.exports = {
   name: 'sex',
  usage: '!sex <user>',
   execute: async(message, args) => {

    let user = null;
    const mention = message.mentions.members.first();

    if(mention) user = mention.user;
    else user = message.author;

    const embed = new MessageEmbed()
    .setDescription(`Zgwałciłeś ${user} i kubusia tez cnie `)
    .setImage('https://c.tenor.com/bjGrgI-Zqs8AAAAC/doggy-doggy-style.gif')
    .setColor(`BLACK`)
    .setFooter('Zerżnięty ez')

    message.channel.send({ embeds: [embed] })
   }
}