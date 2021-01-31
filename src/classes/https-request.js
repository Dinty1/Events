class HttpsRequest {
    constructor(hostname, path, data) {
        const https = require('https')
        data = JSON.stringify(data)

        const options = {
            hostname: hostname,
            path: path,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        }

        const req = https.request(options, res => {
            console.log(`statusCode: ${res.statusCode}`)
        
            res.on('data', d => {
                process.stdout.write(d)
            })
        })
        
        req.on('error', error => {
            console.error(error)
        })
        
        req.write(data)
        req.end()
    }
}

module.exports = HttpsRequest