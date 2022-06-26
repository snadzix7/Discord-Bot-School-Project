const { Client, Message, Util } = require("discord.js");

module.exports = {
    name: "add",

    execute: async(message, args) => {

        if(!message.member.permissions.has("MANAGE_EMOJIS")) return message.channel.send("Nie posiadasz permisji do użycia tego polecenia! \\🔐\nNapisz do kogoś z <@&984002549319335947> prośbę o dodanie! ")

        console.log(`ID dodanej emotki: ${args}`);
        if (!args) return message.reply("Albo mi się nie udało dodać,\nalbo po prostu nie podałeś emoji...\nW każdym bądź razie przepraszam.");

        for ( const rawEmoji of args) {
            const parsedEmoji = Util.parseEmoji(rawEmoji);

            if(parsedEmoji.id) {

                const extension = parsedEmoji.animated ? ".gif" : ".png";
                const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + 
                extension}`;
                message.guild.emojis
                    .create(url, parsedEmoji.name)
                    .then((emoji) => message.channel.send(`Dodano: ${emoji}\nURL (ale przechodzi w png do pobrania): ${emoji.url}\n
                    URL Emotki: \`${emoji.url}\``));
            }
        }
    },
};