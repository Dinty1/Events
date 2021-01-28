const Discord = require('discord.js');
const discordClient = new Discord.Client();

//internal imports
const placeholderParse = require('./utilities/parse-placeholders');
console.log(placeholderParse('hello %test%', {'%test%': 'person'}))