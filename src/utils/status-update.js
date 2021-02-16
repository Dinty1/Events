const mcUtil = require('minecraft-server-util')
const Discord = require('discord.js')
module.exports = (client) => {
    status()
    setInterval(status, 600000)
    async function status() {
        mcUtil.status(client.config.serverAddress)
            .catch(err => {})
            .then(async server => {
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
                    const message = await client.channels.cache.get(client.config.infoChannel).messages.fetch(client.config.infoMessage)
                    const date = new Date()
                    await message.edit(embed)
                    await message.edit(`Last updated ${date.toUTCString()}`)
                }
            })

    }

}