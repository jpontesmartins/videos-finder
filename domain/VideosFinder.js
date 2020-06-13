const wordsFrequency = require('./WordsFrequency');
const playlistOrganizer = require('./PlaylistOrganizer');
const Service = require('../services/ServiceVideo');
const adapter = require('../services/ServiceVideo/adapter');

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

    getTotalOfDaysToWatch() {
        return playlistOrganizer.calculateDaysToWatch(this.videos, this.minutesAvailable);
    }

    getFiveMostFrequentWords() {
        return wordsFrequency.calculeMostFrequentWords(this.videos);
    }
}

module.exports = VideosFinder;
