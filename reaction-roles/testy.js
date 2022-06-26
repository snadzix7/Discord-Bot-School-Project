const Discord = require('discord.js')

module.exports = {
    name: 'reaction-role-test',
    execute: async(message, args, client) => {

        const channel = '987020888987811870';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "Yellow Team");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "Blue Team");

        const yellowTeamEmoji = '💛';
        const blueTeamEmoji = '💙';

        const embed = new Discord.MessageEmbed()
        .setColor('DARK_BLUE')
        .setTitle('Wybierz rolę klikając w reakcję!')
        .setDescription('Wybierz gry w jakie grasz:\n\n'
        + `${yellowTeamEmoji} dla Gry fortnite\n`
        + `${blueTeamEmoji} dla minecrafta`);

        let messageEmbed = await message.channel.send({ embeds: [embed] });
        messageEmbed.react(blueTeamEmoji);
        messageEmbed.react(yellowTeamEmoji);

        client.on('messageReactionAdd', async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if(!reaction.message.guild) return;

            if (reaction.message.channel.id === channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamEmoji);
                    }
                    if (reaction.emoji.name === blueTeamEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamEmoji);
                    }
                } else {
                    return;
                }
        }); 
        client.on('messageReactionRemove', async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if(!reaction.message.guild) return;

            if (reaction.message.channel.id === channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamEmoji);
                    }
                    if (reaction.emoji.name === blueTeamEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamEmoji);
                    }
                } else {
                    return;
                }
    });
}
}