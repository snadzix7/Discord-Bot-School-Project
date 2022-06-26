const Discord = require("discord.js")
const { Permissions } = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'Komenda wyrzucająca użytkowników.',
    usage: '!kick <@wzmianka użytkownika> <powód>',
    execute: async(message, args) => {

      const reason = args.join(" ");
        const { member, mentions } = message
      
        if (
          member.permissions.has(Permissions.FLAGS.ADMINISTRATOR) ||
          member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)
        ) {
          const target = mentions.users.first()
          if (target) {
            if (target.bot) {
              const embed = new Discord.MessageEmbed()
                .setColor('PURPLE')
                .setTitle('Łubudubu - bota nie wyrzucisz XD <:wez_kurwa_o_czym_ty_pierdolisz:969672128712572968>')
                .setDescription(`Dlaczego chciał wywalić bota?\nPowód: ${reason}`)
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))

                message.channel.send({embeds: [embed]});
            } else {
                const targetMember = message.guild.members.cache.get(target.id)
                const tag = `${targetMember}`
                targetMember.kick()
            
                const embed = new Discord.MessageEmbed()
                  .setColor('#00ff08')
                  .setTitle('`Wyrzucono użytkownika` :white_check_mark:!')
                  .setDescription(`${targetMember} Został wyrzucony z serwera.\n Powód: ${reason}`)
                  .setTimestamp()
                  .setFooter(message.author.tag)

                message.channel.send({embeds: [embed]});
            }        
          } else {
            message.reply('**!kick <@wzmianka użytkownika> <powód>**\n*A nie jakąś maniane odwalasz*...')
          }
        } else {
          message.reply(
            '`Brak uprawnień.`'
          )
        }
    }
}