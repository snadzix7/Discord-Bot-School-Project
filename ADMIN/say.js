const Discord = require("discord.js")
const { Permissions } = require('discord.js');

module.exports = {
    name: "say",
    execute: async(message, args) => {
        message.delete()
        if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("Nie posiadasz permisji do użycia tego polecenia! \\🔐")
        const str = args.join(" ")
        if (!str) return message.channel.send(`Podaj treść wiadomości!`)

          message.channel.send(str)
    }
}