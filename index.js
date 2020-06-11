const wordsFrequency = require('./domain/WordsFrequency');
const playlistOrganizer = require('./domain/PlaylistOrganizer');
const Service = require('./services/ServiceVideo');

class VideosFinder {
    constructor(searchTerm, minutesAvailable, platform) {
        this.searchTerm = searchTerm;
        this.minutesAvailable = minutesAvailable;
        this.videos = [];
        this.service = new Service(platform);
    }

    searchVideosToWatch() {
        return this.service.searchVideos(this.searchTerm);
    }

    getTotalOfDaysToWatch() {
        return playlistOrganizer.calculateDaysToWatch(this.videos, this.minutesAvailable);
    }

    getFiveMostFrequentWords() {
        return wordsFrequency.calculeMostFrequentWords(this.videos);
    }
}

module.exports = VideosFinder;
