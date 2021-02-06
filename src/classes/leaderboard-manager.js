const parsePlaceholders = require('../utils/parse-placeholders');
const DiscordMessage = require('./discord-message');

class LeaderboardManager {
    /**
     * 
     * @param {object} options 
     * @param {string} options.id The ID of the leaderboard
     * @param {string} options.sheetName The google sheet to create the leaderboard from (case sensitive!)
     * @param {number} options.topNumbers The number of top scorers to return
     * @param {string} options.scoreFormat The format for displaying the scores
     * @param {string} options.holoName The name of the hologram
     */
    constructor(options) {
        for (let option in options) {
            this[option] = options[option];
            this.constructor.leaderboards[options.id] = this;
        }
        console.log(`Successfully registered leaderboard ${this.id}`)
    }
    static leaderboards = {
        /**
         * 
         * @param {string} leaderboardID
         * @returns {object}
         */
        get: (leaderboardID) => {
            if (!leaderboardID) throw new Error('M8 seriously how do you expect me to find a leaderboard without giving an ID?')
            if (!this.leaderboards[leaderboardID]) throw new Error('Couldn\'t find that leaderboard.');
            return this.leaderboards[leaderboardID];
        }
    };
    /**
     * 
     * @param {*} discordClient The Discord Client
     */
    async update(discordClient) {
        const httpsRequest = require('../utils/https-request');
        require('dotenv').config()

        var options = this;
        options.action = 'getLeaderboard';
        const leaderboard = await httpsRequest('script.google.com', process.env.APPS_SCRIPT_PATH, options);
        
        const config = require('../../config/config');

        let placeholders = this;
        for(let entry in leaderboard) {
            placeholders.place = parseInt(entry) + 1;
            placeholders.name = leaderboard[entry].name;
            placeholders.time = leaderboard[entry].time;
            new DiscordMessage(discordClient, config.consoleChannel, `holo setline ${this.holoName} ${parseInt(entry) + 2} ${parsePlaceholders(this.scoreFormat, placeholders)}`);
        }
    }
}

module.exports = LeaderboardManager;