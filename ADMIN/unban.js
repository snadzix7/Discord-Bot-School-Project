const Discord = require('discord.js');

    module.exports = {
        name: 'unban',
        
    
        execute: async (message, args, client) => {
    
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Hej!\nNie masz permisji!')
            if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('Nie mam permisji.')
    
            const member = message.mentions.members.first();
    
            if(!args[0]) return message.channel.send('Podaj ID/Użytkownika');
    
    
    
            
    
            let reason = args.slice(1).join(" ");
    
            if(!reason) reason = 'Unspecified';
    
            message.guild.members.unban(`${member}`, `${reason}`)
            .catch(err => {
                if(err) return message.channel.send('Something went wrong')
            })
    
            const banembed = new Discord.MessageEmbed()
            .setTitle('Odbanowano użytkownika :white_check_mark:')
            .addField('Odbanowany użytkownik:', member)
            .addField('Odbanowanie przez', message.author)
            .addField('Powód:', reason)
            .setFooter('Czas odbanowania:', client.user.displayAvatarURL())
            .setTimestamp()
    
            message.channel.send(banembed);
    
    
        }
    }