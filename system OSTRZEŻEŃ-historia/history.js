const Discord = require('discord.js')

module.exports = {
    name: 'history',
    usage: '!history <user>',

    execute: async(message, args) => {
        if(!message.member.permissions.has("SEND_MESSAGES")) return;
        let user = null;
        const mention = message.mentions.members.first();

        if(mention) user = mention.user;
        else user = message.author;
            
        message.channel.send('ta komenda jest w trakcie tworzenia\n Zapraszam **!pomoc**.')

        
    }
}
 