module.exports = [
    //Config for stopwatches, comma separated
    //anything within [] can have more than one value, but don't forget to separate with a comma
    //you can create multiple stopwatches by copy-pasting the below object
    //available placeholders (surround with %):
    //id, friendlyName, time, name (playername)
    //command block configuration:
    //start: /discord bcast #bot-chat stopwatch <id> start @p
    //end: /discord bcast #bot-chat stopwatch <id> stop @p
    {
        id: 'TEST_TIMER',//the id that you'll use for all your command blocks
        friendlyName: 'Example Parkour',//friendly name that the challenge is known by
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
        ],
        googleSheetNewRows: [//rows to add to the google spreadsheet
            {
                sheetName: 'Parkour',//sheet name - case sensitive!
                row: ['%name%', '%time%']//going across, the cells in the sheet
            },
            {
                sheetName: '%name%',
                row: ['%friendlyName%', '%time%']
            }
        ]
    },
  
]
