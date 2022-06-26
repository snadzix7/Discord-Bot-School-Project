const Discord = require("discord.js")
const { Permissions } = require('discord.js');
const { usage } = require("./kick");

module.exports = {
    name: 'ban',
    description: 'Zbanuj wybranego użytkownika.',
    usage: '!ban <wzmianka/ID użytkownika> <powód>',
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
              const embed3 = new Discord.MessageEmbed()
                .setColor('PURPLE')
                .setTitle('Nie zbanujesz bota <:wez_kurwa_o_czym_ty_pierdolisz:969672128712572968>')
                .setDescription(`Dlaczego chciał zbanować bota?\nPowód: ${reason}`)
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))

                message.channel.send({embeds: [embed3]});
            } else {
                const targetMember = message.guild.members.cache.get(target.id)
                const tag = `${targetMember}`
                targetMember.ban()
            
                const embed1 = new Discord.MessageEmbed()
                  .setColor('#00ff08')
                  .setTitle('`Zbanowano użytkownika!`')
                  .setDescription(`<:banHAMMER:977591085503221800>${targetMember} Został zbanowany!\nPowód: ${reason}<:banHAMMER:977591085503221800>`)
                  .setTimestamp()
                  .setFooter(message.author.tag)

                message.channel.send({embeds: [embed1]});
            }        
          } else {
            const embed2 = new Discord.MessageEmbed()
                  .setColor('RANDOM')
                  .setTitle('Nikogo nie oznaczyłeś!')
                  .setDescription(`**Aby nałożyć bana musisz go oznaczyć @wzmianką!**\n*Użycie:* !ban <użytkownik> <powód>`)
                  .setTimestamp()
                  .setFooter(message.author.tag)

                message.channel.send({embeds: [embed2]});
          }
        } else {
          message.reply(
            `Brak uprawnień.`
          )
        }
    }
    }
