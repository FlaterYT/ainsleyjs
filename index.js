const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
const emojiName = "ash"; //This only works with custom emojis atm
const messageContent = "why";
client.config = config;

client.on("ready", () => {
  client.user.setGame("Socking my nan", "https://www.twitch.tv/nimaaa/");
  console.log("Ready to level up!")
});

//Looks for emoji and registers a message handler
function registerListeners() {
    let emoji = client.emojis.find("name", emojiName);
    if (emoji === null) {
        console.log(`Unable to find emoji with name '${emojiName}'`);
        process.exit(0);
        return;
    }
    client.on("message", message => {
        if (message.content === messageContent) {
            message.react(emoji).then(() => {
                console.log("Reacted to message")
            }).catch(reason => {
                console.log(`Problem while reacting to message: ${reason}`);
            });
        }
    });
}

//On process exit stuff
const cleanupFunc = async (code) => {
    await client.destroy();
    process.exit(code);
};

process.once("exit", cleanupFunc);
process.once("SIGINT", cleanupFunc);
process.once("SIGTERM", cleanupFunc);
process.once("unhandledRejection", (async (reason, promise) => {
    console.log("Unhandled promise rejection at: Promise", promise, "reason:", reason);
    await cleanupFunc(0);
}));
process.once("uncaughtException", async error => {
    console.log(error.stack);
    await cleanupFunc(0);
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
