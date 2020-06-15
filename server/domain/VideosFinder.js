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
        
        console.log("secondsAvailable");
        console.log(secondsAvailable);

        const organizer = new Organizer(secondsAvailable, durationVideosInSeconds).calculateDaysToWatch();
        return organizer;
    }

    async getFiveMostFrequentWords() {
        if (this.videos.length == 0) this.videos = await this.searchVideosToWatch();
        const wordsFrequency = new WordsFrequency(this.videos);
        return wordsFrequency.calculeMostFrequentWords(this.videos);
    }

    videosDurationInSeconds() {
        let durationVideosInSeconds = [];
        this.videos.map((video, i) => {
            console.log("video.duration");
            console.log(video.duration);
            durationVideosInSeconds.push(video.duration);
        });
        return durationVideosInSeconds;
    }

    secondsAvailableInWeek() {
        let secondsAvailable = [];

        console.log("this.minutesAvailable");
        console.log(this.minutesAvailable);
        if (this.minutesAvailable) {
            this.minutesAvailable.map((minutes, m) => {
                secondsAvailable.push(minutes * 60);
            });
        }
        return secondsAvailable;
    }

}

module.exports = VideosFinder;
