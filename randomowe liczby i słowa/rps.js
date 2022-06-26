const { Discord, MessageEmbed, } = require('discord.js')

module.exports = {
  name: "rps",
  description: "A game of Rock, Paper, Scissors!",
  execute(client, message, args, Discord) {
    var rps = [":moyai:", ":scroll:", ":scissors:"]
    const m = message.channel.send("Let's play a game of Rock, Paper, Scissors! Please react what you would like to choose with the emojis below!").then((message) => {
      message.react(":moyai:");
      message.react(":scroll:");
      message.react(":scissors:");
    });
    const reacted = promptMessage(m, message.author, 30, rps);

    const botChoice = rps[Math.floor(Math.random()*rps.length)];
    const result = getResult(reacted, botChoice);
    m.clearReactions();

    message.channel.send(`You chose ${reacted} and I chose ${botChoice}`);

    function getResult(choice, botChosen) {
message.reactions.removeAll()
      if(choice === ":moyai:" && botChoice === ":scissors:") {
          return message.channel.send("You win! I had fun, let's play again!");
        } else if (choice === ":scroll:" && botChoice === ":moyai:") {
          return message.channel.send("You win! I had fun, let's play again!");
        } else if (choice === ":scissors:" && botChoice === ":scroll:"){
          return message.channel.send("You win! I had fun, let's play again!");
        } else if (choice === botChosen) {
          return message.channel.send("It's a tie!");
        } else {
          return message.channel.send("You lost! I had fun, let's play again!");
        }
    }
  },
};