const Discord = require('discord.js')

module.exports = {
    name: 'usun-kanal',
    usage: '!usun-kanal',

        execute: async(message, args, channel, client) => {
            if(!message.member.permissions.has("ADMINISTRATOR"))
            
        message.channel.send('usuwanie...')
        await message.channel.delete()

        
    }
}