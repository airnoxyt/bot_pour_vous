const figlet = require('figlet');
const Discord = require('discord.js');

module.exports.run = async (client, message, args, settings) => {
if(!args[0]) return message.channel.send('Please provide some text');

msg = args.join(" ");

figlet.text(msg, function (err, data){
    if(err){
        console.log('Something went wrong');
        console.dir(err);
    }
    if(data.length > 2000) return message.channel.send('Merxi de mettre un text qui a moins de 2 000 caractères')

    message.channel.send('```' + data + '```')
})
}
module.exports.help = {
    name: "ascii",
    aliases : [''],
    category: "fun",
    description: "",
    usage : '',
    isUserAdmin: false,
   //cooldown: 10,
    permissions : false,
    args: false
    }