const wordsFrequency = require('./WordsFrequency');
const playlistOrganizer = require('./PlaylistOrganizer');
const Service = require('../services/ServiceVideo');

class VideosFinder {
    constructor(searchTerm, minutesAvailable, service) {
        this.searchTerm = searchTerm;
        this.minutesAvailable = minutesAvailable;
        this.videos = [];
        this.service = new Service(service);
    }

    searchVideosToWatch() {
        this.videos = this.service.searchVideos(this.searchTerm);
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
