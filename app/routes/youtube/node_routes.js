var youtubeParser = require('youtube-parser');

module.exports = function(app, db) {

    // Insert new youtube URL
    app.get('/youtube/:videoId', (req, res) => {
        const url = 'https://www.youtube.com/watch?v=' + req.params.videoId;
        
        youtubeParser.getMetadata(url, { audioOnly: true })
            .then( function(data) {
                youtubeParser.getURL(url, { audioOnly: true })
                    .then ( function(urlList) {
                        var responseObj = data + urlList[0]
                        res.send(responseObj);
                    })
            })
    })
}