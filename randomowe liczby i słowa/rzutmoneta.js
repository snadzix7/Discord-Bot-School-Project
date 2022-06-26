const { MessageEmbed } = require(`discord.js`)
const Discord = require(`discord.js`)

module.exports = {
    name: 'rzuć', 
    description: 'Orzeł lub Reszka',
    usage: '!rzuć',
    execute: async(message, args) => {

      var wynik = (Math.floor(Math.random() * 2) == 0) ? 'Orzeł' : "Reszka"

      const embed = new Discord.MessageEmbed()
      .setTitle(`Wyrzuciłeś:`)
      .setDescription(`**${wynik}**`)
      .setColor("RANDOM")
      .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
          
          await message.channel.send({embeds: [embed]})
  
     }
}