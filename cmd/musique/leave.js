const distube = require('distube')
module.exports.run = (client , message, args) => {
    message.delete();
    let  voiceChannel  = message.member.voice.channel;
    if (!message.member.voice.channel) return message.channel.send(`${message.author} merci de vous connecter dans un salons vocal !`);
    voiceChannel.leave()
}
module.exports.help = {
    name: "leave",
    aliases : ['l'],
    category: "musique",
    description: "Permet de faire quiiter le bot du salons vocal",
    usage : '',
    isUserAdmin: false,
   //cooldown: 10,
    permissions : false,
    args: false
    
}