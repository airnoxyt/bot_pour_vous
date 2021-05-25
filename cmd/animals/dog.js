const Discord = require('discord.js');
const fetch = require("node-fetch")
module.exports.run = async (client, message, args, settings) => {
    const dog = await fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(json => json.message);

    const embed = new Discord.MessageEmbed()
    .setImage(dog)
    
    message.channel.send(embed)
};

    module.exports.help = {
        name: "dog",
        aliases : ['chien'],
        category: "animals",
        description: "Envoie une image de chien",
        usage : '<@user> <nombre>',
        isUserAdmin: false,
       //cooldown: 10,
        permissions : false,
        args: false
        }
