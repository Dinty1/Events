class DiscordMessage {
    constructor(discordClient, channelID, content) {
        this.newMessage(discordClient, channelID, content)
    }
    newMessage(discordClient, channelID, content) {
        discordClient.channels.cache.get(channelID).send(content);
    }
}
module.exports = DiscordMessage;