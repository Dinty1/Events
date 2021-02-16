module.exports = {
    name: 'restart',
    usage: 'restart',
    description: 'Restarts the application',
    execute: async (client, message, args) => {
        if (client.config.admins.includes(message.author.id)) {
            await message.channel.send('Restarting...');
            await client.destroy();
            await process.exit();
        } else {
            message.channel.send('no')
        }
    }
}