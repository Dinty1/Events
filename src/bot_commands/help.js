const Discord = require("discord.js");

module.exports = {
    name: 'help',
    usage: 'help',
    description: 'Returns a list of commands and their uses',
    execute: async (client, message, args) => {
        let commandList = '__Commands:__\n';
        client.commands.forEach(c => {
            commandList += `**${c.usage}** - ${c.description}\n`;
        })
        let embed = new Discord.MessageEmbed()
            .setTitle('Help is here!')
            .setDescription(commandList)
        message.channel.send(embed)
    }
}