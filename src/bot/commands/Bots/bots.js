const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');
const Bots = require("@models/bots");

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            usage: "[User:user]"
        });
    }

    async run(message, [user]) {
         let person = message.mentions.users.first() || message.author

       if(!person) return message.reply("Please ping user")
       Bots.find({
    botid: person.id
  }).sort([
    ['descending']
  ]).exec((err, res) => {
           let embed = new MessageEmbed()
            if (res.length === 0) return message.channel.send(`\`${person.tag}\` has no bots. Add one: <${process.env.DOMAIN}/add/>.`)
           for (i = 0; i < res.length; i++){
               embed.addField(`{i + 1}. <@${res.id}>`)
           }
           embed.setTitle(`${person.username}#${person.discriminator}'s bots`)
           embed.setColor(0x6b83aa)
        message.channel.send(embed)
                  })
    }

};
