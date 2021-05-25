const distube = require('distube')
module.exports.run = async (client , message, args) => {
    message.delete();
    if (!message.member.voice.channel) return message.channel.send(`${message.author} merci de vous connecter dans un salons vocal !`);
    
    const music = args.join(" ");
    message.channel.send('Je recherche la musique demandé').then(msg =>{ 
        msg.edit('Musique trouvé je vais jouer '+ `\`${music}\``)
        client.distube.play(message, music)
    })
}
module.exports.help = {
    name: "play",
    aliases : ['p'],
    category: "musique",
    description: "Permet de jouez de la musique dans un channel vocal",
    usage : '<nom_musique>',
    isUserAdmin: false,
   //cooldown: 10,
    permissions : false,
    args: true
    
}