class DiscordMessage {
    constructor(discordClient, channelID, content) {
        this.newMessage(discordClient, channelID, content)
    }
    newMessage(discordClient, channelID, content) {
        let msg = discordClient.channels.cache.get(channelID).send(content);
        return msg;
    }
}
module.exports = DiscordMessage;