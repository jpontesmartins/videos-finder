const WordsFrequency = require('./WordsFrequency');
const Organizer = require('./PlaylistOrganizer');

const Service = require('../services');

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
        if (this.videos.length == 0) this.videos = await this.searchVideosToWatch();
        
        let secondsAvailable = this.secondsAvailableInWeek();
        let durationVideosInSeconds = this.videosDurationInSeconds();
        return new Organizer(secondsAvailable, durationVideosInSeconds).calculateDaysToWatch();
    }

    async getFiveMostFrequentWords() {
        if (this.videos.length == 0) this.videos = await this.searchVideosToWatch();
        const wordsFrequency = new WordsFrequency(this.videos);
        return wordsFrequency.calculeMostFrequentWords(this.videos);
    }

    videosDurationInSeconds() {
        let durationVideosInSeconds = [];
        this.videos.map((video, i) => {
            durationVideosInSeconds.push(video.duration);
        });
        return durationVideosInSeconds;
    }

    secondsAvailableInWeek() {
        let secondsAvailable = [];
        this.minutesAvailable.map((minutes, m) => {
            secondsAvailable.push(minutes * 60);
        });
        return secondsAvailable;
    }

}

module.exports = VideosFinder;
