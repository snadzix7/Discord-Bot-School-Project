const Discord = require('discord.js')

module.exports = {
    name: 'dodaj',
    description: 'hehe',
    execute: async(message, args) => {

        let role = message.guild.roles.cache.find(role => role.id === "983462381252390996");
        let member = message.mentions.members.first();
        member.roles.add(role);

        message.channel.send(`dodałem role snadzikowi\nEssa`)

    }
}