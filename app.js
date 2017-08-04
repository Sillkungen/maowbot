const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'TOKEN';

bot.on('ready', () =>{
    console.log('redo');
});

//Gets a message in the #general channel starting with '!' and tells it back in the channel backwards.
bot.on('message', message => {
    if(message.author.bot) return;

    if(message.content.indexOf('!') === 0){
        let text = message.content.substring(1);
        let reversed = '';
        let i = text.length;

        while(i > 0){
            reversed += text.substring(i -1, i);
            i --;
        }

        message.reply(reversed);
    }
});

bot.login(token);