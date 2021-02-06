//external imports
const Discord = require('discord.js');
const discordClient = new Discord.Client();
const fs = require('fs');

require('dotenv').config();
discordClient.login(process.env.TOKEN);

//internal imports
const StopwatchManager = require('./classes/stopwatch-manager');
const ScoreManager = require('./classes/score-manager');
const LeaderboardManager = require('./classes/leaderboard-manager');

const config = require('../config/config')
discordClient.config = config;

//register stopwatches
const stopwatches = require('../config/event_config/stopwatches');
for (const stopwatch of stopwatches) {
    new StopwatchManager(stopwatch);
}

//register leaderboards
const leaderboards = require('../config/event_config/leaderboards');
for (const leaderboard of leaderboards) {
    new LeaderboardManager(leaderboard);
}

//register bot commands
discordClient.commands = new Discord.Collection();
let botCommands = fs.readdirSync('./src/bot_commands').filter(file => file.endsWith('.js'));
for(let file of botCommands){
    const command = require(`./bot_commands/${file}`);
    discordClient.commands.set(command.name, command);
    console.log(`Registered command ${command.name}`)
}

discordClient.on('ready', () => {
    console.log('Discord client logged in');
})

discordClient.on('message', async message => {
    let args = message.content.split(' ');
    if(message.content.startsWith(config.commandPrefix)) {
        try {
            discordClient.commands.get(args[0].slice(1)).execute(discordClient, message, args);
        } catch (err) {}
    }
    //inter-bot communication
    if (!message.author.bot) return;
    if (message.channel.id != config.botCommunicationChannel) return;
    switch (args[0]) {
        case 'stopwatch':
            try {
                StopwatchManager.getStopwatch(args[1]).instruct(args.slice(2).join(' '), discordClient, message)
            } catch (error) {
                message.channel.send('Invalid command')
            }
            break;
    }
})