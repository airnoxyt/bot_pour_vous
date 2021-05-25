module.exports.run = (client , message, args) => {
    message.delete();
    if (!message.member.voice.channel) return message.channel.send(`${message.author} merci de vous connecter dans un salons vocal !`);
    client.distube.skip(message)
}
module.exports.help = {
    name: "skip",
    aliases : ['j'],
    category: "musique",
    description: "Permet de passer une musique",
    usage : '',
    isUserAdmin: false,
   //cooldown: 10,
    permissions : false,
    args: false
    
}