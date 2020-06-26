const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');
const Bots = require("@models/vote");
const BotsCheck = require("@models/bots");

var modLog;

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            permissionLevel: 8,
            usage: '[User:user]',
            aliases: ['v']
        });
    }

    async run(message, [user]) {
        if (!user || !user.bot) return message.channel.send(`Ping a **bot**.`);
        let bot = BotsCheck.findOne({
            botid: user.id}, (err ,res) => {
        })
       BotsCheck.findOne({ 
         botid: user.id }, (err ,res) => {
         if(!res){
           return message.reply("Not Exists bot!")
         }else if(res.state == 'unverified'){
                      return message.reply("That bot not verified to recieve votes!")
         }
      })
        Bots.findOne({
          botid: user.id}, (err, res) => {
          if(!res){
             const newvotes = new Bots({
                votes: 1,
                botid: user.id,
            })
            newvotes.save().catch(err => console.log(err));
            message.channel.send("Success voted for " + user.username)
          }else{
            res.votes = res.votes- + -1
            res.save()
          }
          message.channel.send("Success voted for " + user.username)
        })
        let e = new MessageEmbed()
            .setTitle('Vote Message')
            .addField(`Bot`, `<@${user.id}>`, true)
            .addField("Voter", message.author, true)
            .setThumbnail(bot.logo)
            .setTimestamp()
            .setColor(0x26ff00)
        modLog.send(e);
        modLog.send(`<@${bot.owners[0]}>`).then(m => { m.delete() });
    }

    async init() {
        modLog = this.client.channels.cache.get(process.env.MOD_LOG_ID);
    }
};
