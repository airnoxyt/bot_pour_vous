const Discord = require('discord.js');
const fetch = require("node-fetch")
module.exports.run = async (client, message, args, settings) => {
    const fox = await fetch("https://randomfox.ca/floof/")
    .then(res => res.json())
    .then(json => json.image);

    const embed = new Discord.MessageEmbed()
    .setImage(fox)
    
    message.channel.send(embed)
};

    module.exports.help = {
        name: "fox",
        aliases : ['renard'],
        category: "animals",
        description: "Envoie une image d'un renard'",
        usage : '<@user> <nombre>',
        isUserAdmin: false,
       //cooldown: 10,
        permissions : false,
        args: false
        }

//