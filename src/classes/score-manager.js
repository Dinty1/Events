class ScoreManager {
    /**
     * 
     * @param {string} name The name that the scoreboard is known by.
     * @param {string} sheetName The google sheet to store scores on.
     */
    constructor(name, sheetName) {
        if (!name || !sheetName) throw new Error('Missing parameters')
        this.name = name;
        this.sheetName = sheetName;
        this.scores = {};
        if (this.constructor.scoreboards[name]) throw new Error('A scoreboard by that name is already registered');
        this.constructor.scoreboards[name] = this;
    }
    static scoreboards = {
        /**
         * 
         * @param {string} scoreboardName 
         * @returns {object}
         */
        get: async (scoreboardName) => {
            if (!scoreboardName) throw new Error('M8 seriously how do you expect me to find a scoreboard without giving a name?')
            if (!this.scoreboards[scoreboardName]) throw new Error('Couldn\'t find that scoreboard.');
            return this.scoreboards[scoreboardName];
        }
    };
    /**
     * 
     * @param {string} player 
     * @param {number} change 
     */
    adjust(player, change) {
        if (!player || !change) throw new Error('Missing parameters');
        if (isNaN(change)) throw new TypeError(`${change} is not a number`);
        if (!this.scores[player]) {
            this.scores[player] = 0;
        }
        this.scores[player] += change;
        const httpsRequest = require('../utils/https-request');
    }
    /**
     * 
     * @param {string} player 
     * @returns {number}
     */
    query(player) {
        if (!this.scores[player]) return 0;
        else return this.scores[player]
    }

}

module.exports = ScoreManager;