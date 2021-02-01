const mcUtil = require('minecraft-server-util')
const Discord = require('discord.js')
module.exports = {
    name: 'status',
    usage: 'status',
    description: 'Returns the status of the Events server',
    execute: async (client, message, args) => {
        mcUtil.status(client.config.serverAddress)
            .catch(err => message.channel.send('An error occurred, please try again in a minute.'))
            .then(server => {
                if (server.maxPlayers < 1 || !server.maxPlayers) {//if the server is offline
                    let embed = new Discord.MessageEmbed()
                        .setTitle('The server is offline :(')
                        .setDescription('Ask Wipeout or Dinty to start it for you.')
                    message.channel.send(embed)
                } else {
                    let onlinePlayers;
                    if (server.samplePlayers) {
                        onlinePlayers = server.samplePlayers.map(player => player.name);
                    } else {
                        onlinePlayers = 'none :('
                    }
                    let embed = new Discord.MessageEmbed()
                        .setTitle('The server is online!')
                        .addFields([
                            {
                                name: 'Address',
                                value: server.host,
                                inline: true
                            },
                            {
                                name: 'DynIP',
                                value: `${server.srvRecord.host}:${server.srvRecord.port}`,
                                inline: true
                            },
                            {
                                name: 'Version',
                                value: server.version,
                                inline: true
                            },
                            {
                                name: `Online players (${server.onlinePlayers}/${server.maxPlayers})`,
                                value: onlinePlayers
                            },
                        ])
                    message.channel.send(embed).catch(err => message.channel.send(`Oops something went wrong: \`\`\`${err}\`\`\``))

                }
            })

    }
}