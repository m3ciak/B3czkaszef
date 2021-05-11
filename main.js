const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '::::;;;::::::';
 
client.once('ready', () =>{
    console.log('Bot jest online!');
    client.user.setActivity('B3czka_ to szef', {type: 'WATCHING'});
});
 
client.once('ready', () =>{
    console.log('ŻYJE!');
});
 
client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
 
    if (command === 'cs') {
  message.channel.send('Wkrótce dodamy tą komende');
    } else if (command === 'PEPE') {
  message.reply(' :ping_pong:');
} else if (command === 'B3czka do bana') {
  message.reply('WYPIERDALAJ');
    } else if (command === 'gotowi?') {
        message.react('✅');
                message.channel.send('Zrobione!');
    }
});
 

 
 
client.login('ODM0MTQ3MzY2NzU5MTcwMTA5.YH8qRQ.cQU_XPwxFja7XUDxdjXNILEf2RA');


