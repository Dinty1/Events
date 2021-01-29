//external imports
const Discord = require('discord.js');
const discordClient = new Discord.Client();

require('dotenv').config();
discordClient.login(process.env.TOKEN);

//internal imports
const { StopwatchManager } = require('./classes/challenge-classes');

//register stopwatches
const stopwatches = require('../config/event_config/stopwatches');
for(let stopwatch in stopwatches) {
    new StopwatchManager(stopwatches[stopwatch]);
}

discordClient.on('ready', () => {
    console.log('Discord client logged in');
})

discordClient.on('message', async message => {
    //if (!message.author.bot) return;
    let args = message.content.split(' ');
    switch (args[0]) {

        case 'stopwatch':
            try {
                StopwatchManager.getStopwatch(args[1]).instruct(args.slice(2).join(' '), discordClient, message)
            } catch (error) {
                message.channel.send('Invalid command')
            }
    }
})