module.exports.run = (client , message, args) => {
    let  voiceChannel  = message.member.voice.channel;
    message.delete();
    if (!message.member.voice.channel) return message.channel.send(`${message.author} merci de vous connecter dans un salons vocal !`);
    voiceChannel.join().then(  
        message.channel.send('J\'ai rejoint le salon vocal !')
    );
}
module.exports.help = {
    name: "join",
    aliases : ['j'],
    category: "musique",
    description: "Permet de faire rejoindre le bot discord dans le salons vocal",
    usage : '',
    isUserAdmin: false,
   //cooldown: 10,
    permissions : false,
    args: false
    
}