const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
client.config = config;

client.on("ready", () => {
  client.user.setGame("Socking my nan", "https://www.twitch.tv/nimaaa/");
  console.log("Ready to level up!")
});

client.on('message', (message) => {
    if(message.content == 'ainsley'){
          message.channel.send({embed: {
        color: 15844367,
        description: "Would you like me to give your meat a good ol rub?"
}})
.then(() => {
  message.channel.awaitMessages(response => response.content.toLowerCase() == 'yes' || response.content == 'no', {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
     // message.channel.send(`🍆 Ok I am giving your meat a good ol rub, this will be the best orgasm you will ever have! 🍆`);
      if (collected.first().content == 'yes') {
		  message.channel.send({embed: {
        color: 15844367,
        description: "🍆 Ok I am giving your meat a good ol rub, this will be the best orgasm you will ever have! 🍆 "
}})
	  }
	  else if(collected.first().content == 'no') {
		  message.channel.send({embed: {
        color: 15844367,
        description: "You're getting one anyway you fUcKiNg sHiT sTaIn. "  
}}) 
	  }     
    })
    .catch(() => {
         message.channel.send({embed: {
        color: 15844367,
        description: "There was no response in 30 seconds, I gave your small meat a good ol rub anyway you fucking useless peace of shit. "
}})      
   //   message.channel.send('There was no response in 30 seconds, I gave your small meat a good ol rub anyway you fucking useless peace of shit. ');
    });
});   
    }
});

client.on("message", (message) => {
    if(message.content === "ainsley") {
    message.react('🍆');
  }
});

client.on("message", async message => {
  const prefix = config.prefix;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (message.author.id !== client.user.id || message.content.indexOf(client.config.prefix) !== 0) return;

  if (command === "spam") {
    var count = 1; // Number of messages sent (modified by sendSpamMessage)
    var maxMessages = 999999; // Change based on how many messages you want sent

    function sendSpamMessage() {
      try {
        // You could modify this to send a random string from an array (ex. a quote), create a
        // random sentence by pulling words from a dictionary file, or to just send a random
        // arrangement of characters and integers. Doing something like this may help prevent
        // future bots from detecting that you sent a spam message.
        message.channel.send("anal is myth");

        if (count < maxMessages) {
          // If you don't care about whether the messages are deleted or not, like if you created a dedicated server
          // channel just for bot spamming, you can remove the below line and the entire prune command.

          /* These numbers are good for if you want the messages to be deleted.
           * I've also noticed that Discord pauses for about 4 seconds after you send 9
           * messages in rapid succession, and this prevents that. I rarely have any spam
           * messages slip through unless there is a level up from mee6 or Tatsumaki. */
          let minTime = Math.ceil(100);  // Rush RP1
          let maxTime = Math.floor(500); // Arbitrary integer
          let timeToWait = Math.floor(Math.random() * (maxTime - minTime)) + minTime;
          setTimeout(sendSpamMessage, timeToWait);
        } else {
          // Sends a message when count is equal to maxMessages. Else statement can be
          // modified/removed without consequence.
          message.channel.send("------------------");
          message.channel.send("I AM FINISHED!!!");
          message.channel.send("------------------");
        }
      } catch (error) {
        sendSpamMessage();
      }
    }

    message.delete().catch(O_o=>{})
    sendSpamMessage();
  }

});

client.login(process.env.B0T_T0KEN);
