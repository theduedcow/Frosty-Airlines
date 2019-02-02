const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NTMyNjQwMTE4OTM1Mzg4MTY1.DxkZdw.iwsiovg7ScApIsjjeGHu_syOaj4'


bot.on('message', function(message){
    if(message.content == '-Hello')
    {
        message.channel.sendMessage('Hello ' + message.author + ', how are you?');
    }
});
bot.on('message', function(message){
    if(message.content == '-Help')
    {
        message.reply("Welcome to the help page, Cmds: -Hello, -Help, If you expierence other problems, you can report them!")
    }

});
bot.on('message', function(message){
    if(message.content == '-join')
    {
        message.reply("Join the server here: https://discord.gg/g2cPMzD")
    }

});
bot.on('message', function(message){
    if(message.content == '-verify')
    {
        message.reply("Verify your account here: https://verify.eryn.io/")
    }

});
bot.on('message', function(message){
    if(message.content == '-meme')
    {
        message.reply("https://gyazo.com/f94a34b4ed6fc231039c00c57944e144")
    }
});
bot.on('message', function(message){
    if(message.content == '-Server')
    {
        message.reply("Welcome to Frosty Airlines! We hope you have a very frosty time here! :)")
    }

});

bot.on('ready',function(){
    console.log('Ready');
})



bot.login(TOKEN);
