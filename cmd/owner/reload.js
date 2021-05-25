const { settings } = require("../../config.json");

module.exports.run = async (client , message, args)  => {
          if(message.author.id !== settings.OwnerId){
              message.reply('Haha ! Cette commande est impossible à éxecuter ! Tant pis pour toi')
              return;
          }
            await message.delete()
             console.log("Le bot redémare ! Si ce n'est pas vous changé imédiatement de token !")
             process.exit();
         
    }
    module.exports.help = {
        name: "reload",
        aliases : [''],
        category: "owner",
        description: "",
        usage : '',
        isUserAdmin: false,
       //cooldown: 10,
        permissions : true,
        args: false
        
    }