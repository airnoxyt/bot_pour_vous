const Discord = require('discord.js')
module.exports.run = (client , message, args) => {
    message.delete();
    const invite = new Discord.MessageEmbed()
    .setTitle('Invite moi !')
    .setDescription('Pour m\'inviter cliquez [ici](https://discord.com/api/oauth2/authorize?client_id=831884973790724177&permissions=8&redirect_uri=https%3A%2F%2Faponox.inovaperf.me%2Flogin&scope=bot)')
    message.channel.send(invite)

}
module.exports.help = {
    name: "invite",
    aliases : [''],
    category: "membre",
    description: "Permet d'invitez le bot",
    usage : '',
    isUserAdmin: false,
   //cooldown: 10,
    permissions : false,
    args: false
    
}