const Discord = require('discord.js')

module.exports = {
    name: 'zwolnij',
    description: 'Zwalnia z covida xd',
    usage: '!zwolnij <user>',
    execute: async(message, args) => {

        if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("a a a a chciałabyś dziewczynko \\🔐")
        const reason = args.join(" ");
        const zwolnienie = message.guild.roles.cache.get("987832910272942180");
        const uzytkownik = message.guild.roles.cache.get("983118512996376606");

        let member = message.mentions.members.first(); 
        
        member.roles.remove(zwolnienie);
        member.roles.add(uzytkownik);
        

        const embed = new Discord.MessageEmbed()
        .setTitle('<a:rczka:969672110559608852> `Zwolniono z kwarantanny!` ')
        .setDescription(`${member} został zwolniony z więzienia.\n\nUsunięto rolę ${zwolnienie}, a dodano ${uzytkownik}\n\nPowód zwolnienia: ${reason}`)
        .setFooter(`Jak było ziom?`)

        message.channel.send({ embeds: [embed] });
    }
}