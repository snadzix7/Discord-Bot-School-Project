const { MessageEmbed, Message, Client, MessageActionRow, MessageButton } = require("discord.js");
module.exports = {
    name: "ticket",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
     execute: async(message, args) => {
        const ticketChannelName = `❓┃${message.author.username}ˑhelp`
        const ticketReason = args.join(" ");

        message.channel.send(`<@&987390700150730833>\nProszę wejść na kanał #${ticketChannelName}`)
        message.guild.channels.create(ticketChannelName, {
            type: 'GUILD_TEXT',         
        }).then(ch => {
            const ticketOpenEmbed = new MessageEmbed()
                .setColor('GREEN')
                .setTitle(`\`📫\` ${message.author.tag} uworzył ticket!`)
                .setDescription(`Dziękujemy za skorzystanie z systemu ticketów.`)
                .addField(`\`📗\` Problem/Powód:`, `- ${ticketReason}`)
                .addField(`\`💬\` Kanał Ticketa:`, `- ${ch}`)
                .addField(`\`🚨\` Twórca Ticketa:`, ` - ${message.author.tag}`)
                .setFooter(`${message.author.tag} - 🚨 Moderacja już biegnie!`, `https://cdn.discordapp.com/emojis/965931500866535474.webp?size=96&quality=lossless`);
            message.channel.send({ embeds: [ticketOpenEmbed] });

            const ticketChannelEmbed = new MessageEmbed()
           
                .setColor('PURPLE')
                .setTitle(`\`📫\` Ticket stworzony przez ${message.author.tag}!`)
                .setDescription(`Znajdujesz się na kanale Ticketa!. \nPoczekaj tu na członka/ów moderacji serwera \n Zawsze moderacja stara się szybko wyjaśnić problem!`)
                .addField(`\`📗\` Problem/Powód`, `- ${ticketReason}`)
                .setFooter(`${message.author.tag} Ticket`, `https://cdn.discordapp.com/emojis/965931500866535474.webp?size=96&quality=lossless`);
            
            const deleteTicket = new MessageActionRow().addComponents(
                new MessageButton()
                    .setCustomId('deleteTicketButton')
                    .setLabel('Usuń')
                    .setStyle('DANGER')
            );
            ch.send({ embeds: [ticketChannelEmbed], components: [deleteTicket] });
        })
    }
};
  
 