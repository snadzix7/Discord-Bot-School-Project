const {Discord, Permissions, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'clear',
    description: 'Komenda czyszczaca wiadomości',
    execute: async(message, args,) => {
        if(!message.member.permissions.has("MANAGE_MESSAGES")) {
            const embed = new MessageEmbed()
            .setColor('RED')
            .setDescription(`Nie masz do tego permisji`)
            message.channel.send({ embeds: [embed] });
            return;
          }
        if(!args[0] ) {
            const embed1 = new MessageEmbed()
            .setColor('DARK_RED')
            .setTitle(`Nie podałeś/aś ilości!`)
            message.reply({ embeds: [embed1] });
            return;
        }
        if(isNaN(args[0])) {
            const embed2 = new MessageEmbed()
            .setColor('DARK_RED')
            .setTitle('Tylko liczby!')
            .setDescription(`Musisz wpisać od 1 do 2137.`)
            .setFooter('Nie możesz używać liter!')
            message.reply({ embeds: [embed2] });
            return;
        }

        if(args[0] > 500) {
            const embed3 = new MessageEmbed()
            .setColor('DARK_RED')
            .setDescription(`Nie można podawać ilości powyżej 500`)
            message.reply({ embeds: [embed3] });
            return;
        }
        if(args[0] < 2) {
            const embed4 = new MessageEmbed()
            .setColor('DARK_RED')
            .setDescription(`Wartość musi być większa niż 1.`)
            message.reply({ embeds: [embed4] });
            return;
        }

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
        }); let embed6 = new MessageEmbed()
        .setColor("GREEN")
        .setTitle(":white_check_mark: `Usunięto wiadomości.`")
        .setDescription(`<:catlike:969672014442942594>Pomyślnie wyczyszczono czat z ${args[0]} wiadomości <:catlike:969672014442942594>`)
        return  message.channel.send({embeds: [embed6]})
    } 

} 