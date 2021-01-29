module.exports = [
    {
        id: 'TEST_TIMER',
        friendlyName: 'test',
        discordResultMessages: [
            {
                channelID: '804019123092848690',
                channelName: 'challenge-%name%',
                message: '%name% completed challenge %friendlyName% with a time of %time%'
            }
        ],
        minecraftResultCommands: [
            'bc %name% just completed the challenge %friendlyName% with a time of %time%',
            'spawn %name%'
        ]
    }
]