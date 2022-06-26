module.exports = {
    name: "play1",
    description: "test command",

    execute: async (client, message, args) => {

        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send('Dołacz na kanał głosowy');
        if (!args.length) return message.channel.send('Powiedz co mam włączyć!')

        const connection = await joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        });
        const videoFinder = async (query) => {
            const videoResult = await ytsearch(query);
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;


        }
        const video = await videoFinder(args.join(' '));
        if (video) {
            const stream = ytdl(video.url, { filter: 'audioonly' });
            const player = createAudioPlayer();
            const resource = createAudioResource(stream)

            await player.play(resource);
            connection.subscribe(player);
            




            await message.reply(`:thumbsup: Now Playing ***${video.title}***`)
            
        } else {
            message.channel.send('No video results found');
        }



    }
}