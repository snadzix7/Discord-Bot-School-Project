const { MessageEmbed } = require(`discord.js`)
module.exports = {
   name: `hack`,
   execute: async(message, args) => {

    let user = null;
    const mention = message.mentions.members.first();

    if(mention) user = mention.user;
    else user = message.author;

    const embed = new MessageEmbed()
    .setTitle('Schackowali cię debylu bayo yayo lepiej uciekaj')
    .setImage('https://c.tenor.com/1eflc_NfUmkAAAAC/monster-scary.gif')
    .setColor(`#0fa6a8`)
    .setFooter('Wiemy gdzie mieszkasz haha')

    message.channel.send({ embeds: [embed] })
   }
}