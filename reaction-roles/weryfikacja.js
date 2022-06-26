const { MessageEmbed, Client, CommandInteraction } = require('discord.js');

module.exports = {
    name: 'weryfikacja',
    description: 'Rozpoczyna weryfikację',
    /** 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {String[]} args 
     */
     execute: async(message, args) => {
        const role = message.guild.roles.cache.get('983118512996376606')
        if(message.member.roles.cache.has(role)) return interaction.reply({ content: `Już się zweryfikowałeś/aś`, ephemeral: true })

        function random(number) {
            let randomValues = '';
            let stringValues = 'ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyzPQRSTUVWXYZ';
            let sizeOf = stringValues.length;

            for(let q = 0; q < number; q++) {
                randomValues = randomValues+stringValues.charAt(Math.floor(Math.random() * sizeOf))
            }
            return randomValues
        }
        
        const code = random(8)
        const verifyStart = new MessageEmbed()
            .setColor(`GREY`)
            .setAuthor({ name: `Weryfikacja: ${message.author.tag}` })
            .setDescription(`Wpisz kod weryfikacyjny aby zakończyć weryfikację.\nKod: \`${code}\``)
            .setFooter({ text: `Weryfikacja - ${message.author.name}`, iconURL: `${message.author.iconURL()}` })
        
        const success = new MessageEmbed()
            .setColor(`GREEN`)
            .setAuthor({ name: `Weryfikacja zakończyła się z powodzeniem` })
            .setDescription(`Możesz teraz korzystać z pełni serwera`)
            .setFooter({ text: `Weryfikacja - ${message.author.name}`, iconURL: `${message.author.iconURL()}` })
        
        const error = new MessageEmbed()
            .setColor(`RED`)
            .setAuthor({ name: `Kod nie jest poprawny` })
            .setDescription(`Użyj komendy ponownie...`)
            .setFooter({ text: `Weryfikacja - ${message.author.name}`, iconURL: `${message.author.iconURL()}` })

        interaction.reply({ embeds: [verifyStart], ephemeral: true })

        const filter = m => m.author.id === interaction.user.id
        const collector = interaction.channel.createMessageCollector({ filter, time: 20000 })

        collector.on('collect', async message => {
            if(message.content === code) {
                interaction.editReply({ embeds: [success] })
                await interaction.member.roles.add(role)
                collector.stop()
                message.delete()
            } else {
                message.delete()
                return interaction.editReply({ embeds: [error] })
            }
        })
    },
};