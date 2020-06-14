const wordsFrequency = require('./WordsFrequency');
const Organizer = require('./PlaylistOrganizer');

const Service = require('../services');
const adapter = require('../services/adapter');

class VideosFinder {
    constructor(searchTerm, minutesAvailable, service) {
        this.searchTerm = searchTerm;
        this.minutesAvailable = minutesAvailable;
        this.service = new Service(service);
        this.videos = [];
    }

    async searchVideosToWatch() {
        this.videos = await this.service.searchVideos(this.searchTerm);
        return this.videos;
    }

    async getTotalOfDaysToWatch() {
        if (this.videos.length == 0) {
            this.videos = await this.searchVideosToWatch();
        }

        let secondsAvailable = []
        this.minutesAvailable.map((minutes, m) => {
            secondsAvailable.push(minutes*60);
        });
        // console.log("minutes");
        // console.log(this.minutesAvailable);
        // console.log(secondsAvailable);

        let durationVideosInSeconds = [];
        this.videos.map((video, i) => {
            durationVideosInSeconds.push(video.duration)
        });

        console.log(durationVideosInSeconds);

        return new Organizer(secondsAvailable, durationVideosInSeconds).calculateDaysToWatch();
    }

    async getFiveMostFrequentWords() {
        if (this.videos.length == 0) {
            this.videos = await this.searchVideosToWatch();
        }
        return wordsFrequency.calculeMostFrequentWords(this.videos);
    }
}

module.exports = VideosFinder;
