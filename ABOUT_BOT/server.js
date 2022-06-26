const { MessageEmbed, CommandInteractionOptionResolver } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'server',
    execute: async (message, args) => {
        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache;
        let owner = await message.guild.fetchOwner();
        const lvl = (level) => {
            if (level === "LOW") return "Niski"
            if (level === "MEDIUM") return "Średni"
            if (level === "HIGH") return "Wysoki"
            if (level === "VERY_HIGH") return "Najwyższy"
        }
        console.log(owner.user.tag);

        const embed = new MessageEmbed()
            .setDescription(`**Informacje o serwerze!**:`)
            .setColor('ORANGE')
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .addFields(
            { name: 'Nazwa:', value: message.guild.name },
            { name: 'ID Serwera', value: message.guild.id },
            { name: 'Właściciel/ka Servera:', value: owner.user.tag},
            { name: '**Poziom Ulepszeń Serwera:**', value: message.guild.premiumTier ? `Poziom ${message.guild.premiumTier.slice(5)}` : 'None' },
            { name: 'Poziom Weryfikacji', value: lvl(message.guild.verificationLevel) },
            { name: '↼⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯STATYSTYKI⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⇀', value: 'Czyli jakieś emoji, kanały itd.'},
            { name: 'Ilość roli:', value: roles.length.toString() },









            )
    
            .setTimestamp();

        message.channel.send({ embeds: [embed] });
        
    }

}
