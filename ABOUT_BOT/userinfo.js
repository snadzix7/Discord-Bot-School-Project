module.exports = {
    name: 'user',
    
    execute: async(message, args, interaction) => {
        const user = await client.users.fetch(interaction.targetId), member = await interaction.guild.members.cache.get(user.id)
        if(!member || !user) return interaction.reply({ 
            embeds: [
                {
                    color: client.color.error,
                    description: `\` Error: Couldn't find this user \``
                }
            ]
        })
        return interaction.reply({ 
            embeds: [
                {
                    author: {
                        name: `Informations about: ${user.username}`,
                        iconURL: user.displayAvatarURL({ dynamic: true })
                    },
                    color: client.color.normal,
                    description: `**__General__**
 
> User: ${user}
 
> Full name | ID: \` ${user.tag} | ${user.id} \`
 
> Account created: <t:${Math.round(user.createdTimestamp / 1000)}:F> (<t:${Math.round(user.createdTimestamp / 1000)}:R>)
 
> Bot?: \` ${user.bot ? 'Yes' : 'No'} \`
 
 
**__On server__**
 
> Joined server: <t:${Math.round(member.joinedTimestamp / 1000)}:F> (<t:${Math.round(member.joinedTimestamp / 1000)}:R>)
 
> Roles amount: \` ${member.roles.cache.size - 1} + everyone \`
 
> Highest role: ${member.roles.highest} 
 
> Bannable?**\***: \` ${member.bannable ? 'Yes' : 'No'} \`
 
> Kickable?**\***: \` ${member.kickable ? 'Yes' : 'No'} \``,
                    thumbnail: {
                        url: user.displayAvatarURL({ dynamic: true })
                    },
                    footer: {
                        text: `⠀* - Ability to perform this actions by me`
                    }
                }
            ]
        })
    }
}