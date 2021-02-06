class DiscordMessage {
    /**
     * 
     * @param {object} discordClient 
     * @param {string} channelID 
     * @param {string} content 
     */
    constructor(discordClient, channelID, content) {
        this.newMessage(discordClient, channelID, content)
    }
    async newMessage(discordClient, channelID, content) {
        let msg = await discordClient.channels.cache.get(channelID).send(content);
        return msg;
    }
}
module.exports = DiscordMessage;