const Discord = require('discord.js')

module.exports = {
    name: 'anime',
    usage: '!anime <obraz>',
    execute: async(message, args) => {

        message.channel.send(`
        https://cdn.discordapp.com/attachments/989987734003286086/990372551995822120/video-1656104410.mp4\n
        https://cdn.discordapp.com/attachments/980039553018638396/990373591184986162/trim.3BE5DBF3-1FF6-4B11-8F05-57A7173E7451.mov\n
        https://cdn.discordapp.com/attachments/980039553018638396/990373591449235546/18.mp4\n
        https://cdn.discordapp.com/attachments/980039553018638396/990374527768862720/trim.505357B3-C90A-46F9-BF88-4D3A9F252526.mov\n
        https://cdn.discordapp.com/attachments/980039553018638396/990374805532446740/trim.DC64798F-75C8-474F-B9FE-F9BAF822AF5D.mov`)

    }
}