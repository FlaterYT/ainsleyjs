const Discord = require("discord.js");
const client = new Discord.Client({ fetchAllMembers: true, sync: true });
const config = require('./config.json');
client.config = config;

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`ainsley help for ${client.guilds.size} servers and ${client.users.size} members`);
});

client.on('message', (message) => {
	
    msg = message.content.toLowerCase();
	
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
        description: "There was no response in 30 seconds, I gave your small meat a good ol rub anyway you fucking useless piece of shit. "
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

client.on('message', (message) => {
    if(message.content == 'ainsley meme'){
        var meme = Math.floor((Math.random() * 11) + 1);
       
      
      
      if (meme == 1) {
   message.channel.send("Hot and Spicy Meat! YeAh BoY!", {
            file: "https://i.kym-cdn.com/photos/images/newsfeed/000/489/966/dc2.jpg" 
             });
}
       if (meme == 2) {
   message.channel.send("Hot and Spicy Meat! YeAh BoY!", {
            file: "https://i.kym-cdn.com/photos/images/facebook/000/940/872/587.jpg" 
             });
}
      
        if (meme == 3) {
   message.channel.send("Hot and Spicy Meat! YeAh BoY!", {
            file: "https://i.pinimg.com/originals/8e/6d/0b/8e6d0bc25df590ca5287fa574109a079.png" 
             });
}
      
       if (meme == 4) {
   message.channel.send("Hot and Spicy Meat! YeAh BoY!", {
            file: "https://i.imgur.com/iKWk54H.jpg" 
             });
}
      
      if (meme == 5) {
   message.channel.send("Hot and Spicy Meat! YeAh BoY!", {
            file: "http://s.quickmeme.com/img/c5/c58bd0f654c59e3771817b244eb12de3053d4fe0beac68d5ac32d59dbb684565.jpg" 
             });
}
      
      if (meme == 6) {
   message.channel.send("Hot and Spicy Meat! YeAh BoY!", {
            file: "http://i.imgur.com/iB7l5.jpg" 
             });
}
      if (meme == 7) {
   message.channel.send("Hot and Spicy Meat! YeAh BoY!", {
            file: "https://i.kym-cdn.com/photos/images/original/000/123/548/1305458703717.jpg" 
             });
}
      
      
            if (meme == 8) {
   message.channel.send("Hot and Spicy Meat! YeAh BoY!", {
            file: "http://s.quickmeme.com/img/96/96280b593c7bf446ef9766a378b98cc569b9c52af10351dd0be91014880e6c0f.jpg" 
             });
}			 
      
      
            if (meme == 9) {
   message.channel.send("Hot and Spicy Meat! YeAh BoY!", {
            file: "http://t.qkme.me/3scqhb.jpg" 
             });
}  
      
      
            if (meme == 10) {
   message.channel.send("Hot and Spicy Meat! YeAh BoY!", {
            file: "https://pbs.twimg.com/media/CrNUNf3WYAAt_pJ.jpg" 
             });
} 
      
      
            if (meme == 11) {
   message.channel.send("Hot and Spicy Meat! YeAh BoY!", {
            file: "https://i.kym-cdn.com/photos/images/original/000/915/876/ed4.png" 
             });
}          
      
    }
});

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'general');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | name : ', `${member}`)
        .addField(':microphone2: | Welcome!', `Welcome to the server, ${member} prepare your anus!`)
        .addField(':id: | User :', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | Your are the member', `${member.guild.memberCount}`)
        .addField("Name", `<@` + `${member.id}` + `>`, true)
        .addField('Server', `${member.guild.name}`, true )
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

client.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined" + `${member.guild.name}`)

});

client.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'general');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Name:', `${member}`)
        .addField('Has Let the Server', ';(')
        .addField('Bye', 'We will never miss you asshole!')
        .addField('The server now as', `${member.guild.memberCount}` + " members")
        .setFooter(`**${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

client.on('guildMemberRemove', member => {
    console.log(`${member}` + "has left" + `${member.guild.name}` + "Sending leave message now")
    console.log("Leave Message Sent")
});

client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
  
  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Administrator", "Moderator", "Admin", "Mod", "Owner", "Co-Owner"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
  
  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Administrator", "Moderator", "Admin", "Mod", "Owner", "Co-Owner"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
	
  if(command === "unban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Administrator", "Moderator", "Admin", "Mod", "Owner", "Co-Owner"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid User ID");
    
    await member.unban(member)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't unban because of : ${error}`));
    message.reply(`${member.user.tag} has been unbanned by ${message.author.tag}`);
  }
  
  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    if(!message.member.roles.some(r=>["Administrator", "Moderator", "Admin", "Mod", "Owner", "Co-Owner"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 1 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
});

client.on('message', (message) => {
    if(message.content == 'ainsley help'){
        message.channel.send({embed: {
    color: 15844367,
    footer: {
    },
    thumbnail: {
      "url": "https://orig00.deviantart.net/6fdf/f/2014/117/9/2/ainsley_harriot_head_by_lacorocks-d7gacxq.png"
    },
    author: {
      name: "Ainsley Bot Commands",
      url: "https://www.youtube.com/watch?v=u2X7GCUhZJs",
      icon_url: "https://images.encyclopediadramatica.rs/thumb/1/11/AinsleyFace.png/150px-AinsleyFace.png"
    },
    fields: [
      {
        name: "**Fun**",
        value: "ainsley, meme, say"
      },
      {
        name: "**Moderation**",
        value: "ping, kick, ban, purge"	        
      }

    ]
  }
}
        
        
        
        );   
    }
});
	    
client.login(process.env.B0T_T0KEN);
