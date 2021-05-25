const db = require('../../db.json')
const fs = require('fs');
const Discord  = require('discord.js');
module.exports.run = (client , message, args) => {
    message.delete();
    var server = message.guild.id;
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
    if(!user){
        message.reply('Merci de mettre un utilisateur !')
    }else{
        if(!db["warn"][user.id]){
        db["warn"][user.id] = {
         nombre: 0
        };
      }/*if(db["warn"][user.id].nombre = -1){
        db["warn"][user.id].nombre = 0
      }*/
      
       db["warn"][user.id].nombre = db["warn"][user.id].nombre + 1
    }
    fs.writeFile("db.json", JSON.stringify(db, null , 4), (err) => {
        if(err) console.log(err)})
   
   

    fs.writeFile("./db.json", JSON.stringify(db, null , 4), (err) => {
        if(err) console.log(err)
    })
    const warn = new Discord.MessageEmbed()
    .setTitle('/!\ Warn /!\ ')
    .setDescription(`${user} à reçus un warn par ${message.author} !\n${user} à désromer ${db["warn"][user.id].nombre} de warn(s) ! `)
    message.channel.send(warn).then( async message   => {
         message.delete({timeout: 5000})
    })
    


}
module.exports.help = {
    name: "warn",
    aliases : ['wrn'],
    category: "admin",
    description: "permet de warn une personne",
    usage : '<@user>',
    isUserAdmin: true,
   //cooldown: 10,
    permissions : true,
    args: true
    
}