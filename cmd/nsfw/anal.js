const Discord = require('discord.js')
module.exports.run = (client , message, args) => {
    message.delete();
    var superagent = require('superagent');

    if (!message.channel.nsfw) return message.channel.send('Vous devez utiliser cette commande dans un salon nsfw !') 

    var lo = new Discord.MessageEmbed()
                .setDescription(`Veuillez patienter...`)
                .setTimestamp()

    message.channel.send(lo).then(m => {

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'anal'}).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
                .setDescription(`:underage:\n**[L'image ne se charge pas ? cliquez ici](${response.body.message})**`)
                .setTimestamp()
                .setImage(response.body.message)
                .setFooter(client.footer)
            
            m.edit(embed_nsfw);
        });
    });
}
module.exports.help = {
    name: "anal",
    aliases : [''],
    category: "nsfw",
    description: "",
    usage : '',
    isUserAdmin: false,
   //cooldown: 10,
    permissions : false,
    args: false
    
}