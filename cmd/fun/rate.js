const Discord = require('discord.js')
module.exports.run =  async (client, message, args, settings) => {
    let number = Math.floor(Math.random() * 101);
    if (!args[1]) {
        const embedd = new Discord.MessageEmbed()
        .setTitle('Je note')
        .setDescription('Je vous attribuerais une note ' + number + '/100')
        return message.channel.send(embedd)
    } else {
        let user = message.mentions.users.first();
        if (!user) {
            return message.channel.send('Veuillez indiquer qui vous évaluez.')
        }
        const Embed  = new Discord.MessageEmbed()
        .setTitle('Je note')
        .setDescription('Je noterais ' + user.username + ' a ' + number + '/100')
        return message.channel.send(Embed)

    }

};




module.exports.help = {
    name: "rate",
    aliases : [''],
    category: "fun",
    description: "Airbot vous note /100 !",
    usage : '',
    isUserAdmin: false,
   //cooldown: 10,
    permissions : false,
    args: false
    }