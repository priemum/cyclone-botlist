// This is just to disable automatic help command
const { Command } = require('klasa');
module.exports = class extends Command {
    constructor(...args) {super(...args, {});}
    async run(message) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Cyclone Bot List ™")
        .setDecription("c!botinfo <@bot> ``Get bot info``\nc!count ``Tells you bots counts``\nc!marknsfw <@bot> ``Make bot nsfw``\nc!notnsfw <@user> ``unmark bot nsfw``\nc!queue ``Shows bot queue``\nc!remove <@bot> ``Remove bot from list``\nc!verify <@bot> ``Approve Bots!``\nc!widget <@bot>``Shows Bot widget``")
        .setFooter("Cyclone Bot List ™ || Help Command")
        }
    message.channel.send(embed)
};
