
const Discord = require('discord.js');
const UseEmbed = new Discord.MessageEmbed()

module.exports.run = (client, message, args, settings) => {

    
    let UseEmbed = new Discord.MessageEmbed()
.setAuthor(message.author.tag)

        .setThumbnail(message.author.displayAvatarURL({dynamic: true, size: 512}))
        .addField(`ð` + 'Nom d\'utilisateur', `${message.author.username}`)
        .addField(`#ï¸â£` + "Tag", message.author.discriminator)
        .addField(`ð` + "ID", message.author.id)
        .addField(` ð¢/ð´ / âª / ð ` + "status", message.author.presence.status)
        .addField(`ð` + "compte crÃ©e le", message.author.createdAt)
        .addField(`ð¬ ` + "message envoyÃ©", settings.message)
        .addField(`â­` + "Xp" , settings.experience)
        .addField(`ð¸`  +"Argent", settings.balance)
        message.delete();
       message.channel.send(UseEmbed) 
       message.react("736181495881924658")
       message.react("746679342075084900")
       
        
}

module.exports.help = {
    name: "us",
    aliases : ['userinfo'],
    category: "membre",
    description: "Permet de voir les info d'une personne",
    usage : '',
    isUserAdmin: false,
   //cooldown: 10,
    permissions : false,
    args: false
    }