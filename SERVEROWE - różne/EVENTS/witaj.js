module.exports= {
    name: "guildMemberAdd",
    async execute(member) {
        member.guild.channel.cache.get("978655130280927243").send(`${member.user.username} dołączył do serwera!`);
        
        const newMemberEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Nowy użytkownik!")
        .setDescription(`${member.user} dołączył do naszego serwera!`)
        .setImage(member.user.avatarURL)
        .setFooter('a')
        .setTimestamp();

    }
}