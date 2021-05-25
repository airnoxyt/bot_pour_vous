
const Discord = require('discord.js');
const UseEmbed = new Discord.MessageEmbed()

module.exports.run = (client, message, args, settings) => {

    
    let UseEmbed = new Discord.MessageEmbed()
.setAuthor(message.author.tag)

        .setThumbnail(message.author.displayAvatarURL({dynamic: true, size: 512}))
        .addField(`📑` + 'Nom d\'utilisateur', `${message.author.username}`)
        .addField(`#️⃣` + "Tag", message.author.discriminator)
        .addField(`🆔` + "ID", message.author.id)
        .addField(` 🟢/🔴 / ⚪ / 🌙 ` + "status", message.author.presence.status)
        .addField(`📆` + "compte crée le", message.author.createdAt)
        .addField(`💬 ` + "message envoyé", settings.message)
        .addField(`⭐` + "Xp" , settings.experience)
        .addField(`💸`  +"Argent", settings.balance)
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