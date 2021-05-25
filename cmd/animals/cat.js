const Discord = require('discord.js');
const fetch = require("node-fetch")
module.exports.run = async (client, message, args, settings) => {
    const cat = await fetch("http://aws.random.cat/meow")
    .then(res => res.json())
    .then(json => json.file);
//
    const embed = new Discord.MessageEmbed()
    .setImage(cat)
    message.channel.send(embed)
};

    module.exports.help = {
        name: "cat",
        aliases : ['chat'],
        category: "animals",
        description: "Envoie une image de chat",
        usage : '<@user> <nombre>',
        isUserAdmin: false,
       //cooldown: 10,
        permissions : false,
        args: false
        }
