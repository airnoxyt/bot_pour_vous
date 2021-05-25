const {Client, Collection} = require('discord.js')
const client = new Client({ partials: ['MESSAGE', 'REACTION']});
["commands", "cooldowns"].forEach(x => client[x] = new Collection());
const settings = require('./config.json')
const db = require('./db.json')
const fs = require('fs')
const DisTube = require('distube')
client.distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });
const loadCommands = (dir = "./cmd/") => {
    fs.readdirSync(dir).forEach(dirs => {
        const commands = fs.readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"))

        for (const file of commands) {
            const getFileName = require(`${dir}/${dirs}/${file}`);
            client.commands.set(getFileName.help.name, getFileName);
            console.log(`|✅|${getFileName.help.name}|`
                         );
        };
    });
};
loadCommands()



client.on('message', message => {
    if(usersSpamMap.has(message.author.id)){
        const userData = usersSpamMap.get(message.author.id);
        let {msgCount} = userData;
        msgCount += 1 
        userData.msgCount = msgCount;
        usersSpamMap.set(message.author.id, userData)
        if (msgCount >= 6) message.delete();
        if (msgCount === 9) message.guild.member(message.author.id).ban({reason: 'Spam'})
    }
     else{
         usersSpamMap.set(message.author.id, {
             msgCount: 1 
    
        })
        setTimeout(() => {
            usersEveryoneMap.delete(message.author.id);
        }, 10000)}; 

    if (message.author.bot || !message.content.startsWith(settings.prefix)) return;
    if(!db["users"][message.author.id]){
        db["users"][message.author.id] = {
            xp: 0,
            level: 0,
            msg: 0,
        }
    }
    fs.writeFile("db.json", JSON.stringify(db, null , 4), (err) => {
        if(err) console.log(err)})
  const args = message.content.slice(settings.prefix.length).split(/ +/);
  const user = message.mentions.users.first();

 console.log(args);
 const commandName = args.shift().toLowerCase();




  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
  if (!command) return ;

  if (command.help.args &&  !args.length) {
  let NoArgsReply = `Il nous faut plus de précision ${message.author} !`;
  if (command.help.permissions && !message.member.hasPermission('BAN_MEMBERS')) return message.reply("Oups ! Tu n'a pas les permissions !")

  if (command.help.usage) NoArgsReply += `\nVoici comment utilisé la commande: \`${settings.prefix}${command.help.name} ${command.help.usage}\` ` ;
  return message.channel.send(NoArgsReply);

  }
  if(!client.cooldowns.has(command.help.name)) {
  client.cooldowns.set(command.help.name, new Collection);

  }
  const timeNow = Date.now()
  const tStamps = client.cooldowns.get(command.help.name);
  const cdAmount = (command.help.cooldown || settings.cooldown)* 1000;

  if(tStamps.has(message.author.id)){
  const cdExpiration = tStamps.get(message.author.id) + cdAmount;

  if(timeNow < cdExpiration){
      timeLeft = (cdExpiration - timeNow) / 1000;
      return message.reply(`Oups ! Merci d'attendre \`${timeLeft.toFixed(0)}\`seconde(s) !`)
  }
  }

  tStamps.set(message.author.id, timeNow);
  setTimeout(() => tStamps.delete(message.author.id), cdAmount);


  if (command.help.isUserAdmin && !user) return message.reply("Oups ! Tu n'a pas mensionnez d'utilisateure")
  if (command.help.isUserAdmin && message.guild.member(message.mentions.users.first()).hasPermission('BAN_MEMBERS')) return message.reply("Oups ! Tu ne peut pas utilisé cette comande contre cette personne !")
  if (command.help.isUserAdmin && message.guild.member(message.mentions.users.first()).hasPermission('ADMINISTRATOR')) return message.reply("Oups ! Tu ne peut pas utilisé cette comande contre cette personne !")






  command.run(client,message,args, settings)
})


client.on('ready' , async () => {
    console.log('Je suis en ligne')
    await client.channels.cache.get(settings.logChannel).send(`<@${settings.OwnerId}> ! Je démarre !`)
    client.user.setPresence({ activity: { name: `${settings.Statut}`, type: 'PLAYING'}, status: 'online'})
})
client.login(settings.token)