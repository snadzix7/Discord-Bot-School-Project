const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client({
    intents: [
      Discord.Intents.FLAGS.GUILDS,
      Discord.Intents.FLAGS.GUILD_MESSAGES
      ]
  });

client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

    for(const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

client.on("message", message => {


  if(message.content === "chuj") {
    message.channel.send("I po co przeklinasz, warna chcesz?")
  }


  if(message.content === "kurwa") {
    message.channel.send("I po co przeklinasz, warna chcesz?")
  }
  if (message.content === "<@976834838541795439>") {
    message.channel.send("> **Cześć!** Jestem botem napisanym przez `snadzix#1933`\n> Napisał mnie w Maju (19) 2022 roku.\n> Moje funkcje sięgają:\n- `Dobrze zrobionych komend moderacyjnych`,\n- `Dobrze zrobionych komend dla zabaw` (**4fun**)!\n\nAby się dowiedzieć czegoś o komendach napisz ***!pomoc*** - pomaga to w lepszym zrozumienia bota.\n\n**Mój prefix to** ` ! `.\n\nOdpowiadam także na różne sformułowania jak będzie trzeba!\n\nBłędy głaszaj do <@972222315033165886> lub na server supportu (mam w bio)!\n\nJeszcze się rozwijam więc no... To chyba na tyle :))")
  }
  if(message.content === "JD") {
    message.channel.send("ja pierdole...")
  }
  if(message.content === "Jd") {
    message.channel.send("ja pierdole...")
  }
  if(message.content === "jd") {
    message.channel.send("ja pierdole...")
  }
  if(message.content === "jD") {
    message.channel.send("ja pierdole...")
  }
  
  if(message.content === "Kurwa") {
    message.channel.send("I po co przeklinasz, warna chcesz?")
  }
  if(message.content === "KURWA") {
    message.channel.send("I po co przeklinasz, warna chcesz?")
  }
  if(message.content === "Chuj") {
    message.channel.send("I po co przeklinasz, warna chcesz?")
  }
  if(message.content === "CHUJ") {
    message.channel.send("I po co przeklinasz, warna chcesz?")
  }
  if(message.content === "bomba!") {
    message.channel.send("ROZPIERDALAMY SERWER ZA 3.. 2... 1...")
  }
  if(message.content === "Bomba!") {
    message.channel.send("ROZPIERDALAMY SERWER ZA 3.. 2... 1...")
  }
  if(message.content === "BOMBA!") {
    message.channel.send("ROZPIERDALAMY SERWER ZA 3.. 2... 1...")
  }
  if(message.content === "ej") {
    message.channel.send("No co kozaczku jebany \nw dupe jepany")
  }
  if(message.content === "EJ") {
    message.channel.send("No co kozaczku jebany \nw dupe jepany")
  }
  if(message.content === "Ej") {
    message.channel.send("No co kozaczku jebany \nw dupe jepany")
  }
  if(message.content === "eJ") {
    message.channel.send("No co kozaczku jebany \nw dupe jepany")
  }
  if(message.content === "!kick <@972222315033165886>") {
    message.channel.send("O ty smieciu maly jak snadzix tu przyjdzie masz przewalone\n<@972222315033165886> Sprawdź logi!")
  }
  if(message.content === "snadzix") {
    message.channel.send("Tylko proszę, opisz problem tu, a jutro snadzix zobaczy o co chodzi.")
  }
  if(message.content === "Snadzix") {
    message.channel.send("Tylko proszę, opisz problem tu, a jutro snadzix zobaczy o co chodzi.")
  }
  if(message.content === "SNADZIX") {
    message.channel.send("Tylko proszę, opisz problem tu, a jutro snadzix zobaczy o co chodzi.")
  }
  if(message.content === '<@976834838541795439> najeb mu') {
    message.channel.send(`Lece najebac tej kurwie malej\nTo moze zrob tak.\n!kwarantanna <ten chujek> <powod> i ez\nEleczka ziobro ;)`)
  }
  

})

const prefix = '!';

client.once('ready', () =>
{
    console.log(`Bot jest online!`)

    client.user.setActivity('!pomoc | Oznacz mnie', {type: 'PLAYING'});
});

client.on('messageCreate', async message => 
{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();



    if(!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    try{
      command.execute(message, args);
    } catch (error) {
      console.error(error);
      message.reply('Wystąpił mi nieznany błąd, albo może to ty źle coś napisałeś? W każdym bądź razie zgłoś to do snadziczek#1933 wraz z zrzutem ekranu.🚩')
    }
});

client.login('OTc2ODM0ODM4NTQxNzk1NDM5.GZt0q3.y63zRtopBCcWVfTZ7qY-HX-Yk6axQALLa1doWQ');