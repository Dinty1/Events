module.exports = [
    //Config for stopwatches, comma separated
    //anything within [] can have more than one value, but don't forget to separate with a comma
    {
        id: 'TEST_TIMER',//the id that you'll use for all your command blocks
        friendlyName: 'Test Parkour',//friendly name that the challenge is known by
        discordResultMessages: [
            {
                channelID: '804019022055604285',//the id of the channel to post to. channelName overrides this, but good to have as a backup
                channelName: 'challenge-%name%',//the name of a channel to post to, placeholders are allowed. if this channel cannot be found then it will fall back to the specified id
                content: '%name% completed challenge %friendlyName% with a time of %time%'//message content
            }
        ],
        minecraftResultCommands: [//minecraft commands to run via the discord console
            'bc %name% just completed the challenge %friendlyName% with a time of %time%',
            'spawn %name%',
        ]
    },
]