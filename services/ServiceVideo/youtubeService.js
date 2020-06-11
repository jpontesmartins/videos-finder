const { google } = require('googleapis');
const Video = require('./Video');
const dotenv = require('dotenv').config();

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
console.log(YOUTUBE_API_KEY);

const youtube = google.youtube({
    version: "v3",
    auth: YOUTUBE_API_KEY
});

function search(term) {
    youtube.search.list({
        part: 'id, snippet',
        q: 'cats',
        videoDuration: 'any',
        maxResults: 10
    }, searchResults())

}

function searchResults() {
    return (err, data) => {
        if (err) {
            console.log("erroooo");
            console.log(err);
        }
        if (data) {
            const searchResult = data.data;
            searchResult.items.forEach(item => {
                youtube.videos.list({
                    part: 'id, snippet, contentDetails',
                    id: item.id.videoId
                }, results());
            });
        }
    };
}

function results() {
    return (err, data) => {
        if (err) {
            console.log("errroooo");
        }
        if (data) {
            const video = new Video(data.data.items[0])
            console.log(video.getInfo());
        }
    };
}


module.exports = {
    search
}


search("filosofia");