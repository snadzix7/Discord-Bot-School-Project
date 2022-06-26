const Discord = require('discord.js')

module.exports = {
    name: 'warn',
    aliases: 'w',
    description: 'Ostrzega użytkownika',
    usage: '!warn <@user>',
    execute: async(message, args) => {
        if(!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send("Brak permisji. Działanie zostało zgłoszone do <@972222315033165886>. \\🔐")

        

        const reason = args.join(" ");

        let user = null;
        const mention = message.mentions.members.first();

        if(mention) user = mention.user;
        
        const embed = new Discord.MessageEmbed()
        .setColor('DARK_RED')
        .setTitle(':white_check_mark: `Użytkownik ostrzeżony.`')
        .setDescription(`${user} został ostrzeżony.\nPowód: ${reason}\nPing użytkownika/bota na początku wynika z małego błędu. `)
        .setFooter(message.author.tag)

        message.channel.send({ embeds: [embed] });
    }
}