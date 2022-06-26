const Discord = require('discord.js')

module.exports = {
    name: 'kwarantanna',
    description: 'Wysyła kogoś na wakacje ',
    usage: '!kwarantanna <user>',
    execute: async(message, args) => {
        if(!message.member.permissions.has("MANAGE_ROLES")) return message.channel.send("Nie wyślesz nikogo :c\\🔐")

        const reason = args.join(" ");

        let role = message.guild.roles.cache.find(role => role.id === "987832910272942180");
        let rolauzytkownika = message.guild.roles.cache.find(role => role.id === "983118512996376606");
        let member = message.mentions.members.first(); 
        member.roles.add(role);
        member.roles.remove(rolauzytkownika);


        const embed = new Discord.MessageEmbed()

        .setTitle('Nałożono obowiązek kwarantanny domowej\\💚')
        .setDescription(`Wysłano ${member} na kwarantannę\n\nPowód: ${reason}\n\nOd teraz jako więzień posiada rolę ${role}.`)
        .setColor('DARK_BUT_NOT_BLACK')
        .setFooter(message.author.tag, message.author.avatarURL({ dynaimc: true }));


        message.channel.send({ embeds: [embed] });
    }
}