const { google } = require('googleapis');
const dotenv = require('dotenv').config();

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

class YoutubeService {
    constructor() {
        this.provider = google.youtube({
            version: "v3",
            auth: YOUTUBE_API_KEY
        });
    }

    async search(term) {
        const videos = await this.searchByTerm(term);

        const promises = [];
        videos.map((simpleVideo, i) => {
            promises.push(this.searchByVideoId(simpleVideo));
        });

        return Promise.all(promises).then(responses => responses);
    }

    searchByVideoId(video) {
        return new Promise((resolve, reject) => {
            this.provider.videos.list({
                part: 'id, snippet, contentDetails',
                id: video.id.videoId
            }, (err, data) => {
                if (data) {
                    const videoFull = data.data.items[0];
                    resolve(videoFull);
                } else {
                    reject(err);
                }
            });
        });
    }

    searchByTerm(term) {
        term = 'cats';
        console.log(`searchin for: ${term}`)
        return new Promise((resolve, reject) => {
            this.provider.search.list({
                part: 'id, snippet',
                q: term,
                videoDuration: 'any',
                maxResults: 2
            }, (err, data) => {
                if (data) {
                    resolve(data.data.items);
                }
                else {
                    reject(err);
                }
            });
        });
    }

}

module.exports = YoutubeService;
