module.exports = [
    {
        id: 'TEST_TIMER',
        friendlyName: 'Test Parkour',
        discordResultMessages: [
            {
                channelID: '804019022055604285',
                content: '%name% completed challenge %friendlyName% with a time of %time%'
            }
        ],
        minecraftResultCommands: [
            'bc %name% just completed the challenge %friendlyName% with a time of %time%',
            'spawn %name%',
        ]
    }
]