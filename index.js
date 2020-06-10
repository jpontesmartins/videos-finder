const wordsFrequency = require('./domain/WordsFrequency');
const playlistOrganizer = require('./domain/PlaylistOrganizer');
const serviceVideos = require('./services/ServiceVideo');

class VideosFinder {
    constructor(searchTerm, minutesAvailable) {
        this.searchTerm = searchTerm;
        this.minutesAvailable = minutesAvailable;
        this.videos = [];
    }

    searchVideosToWatch() {
        return serviceVideos.searchVideos(this.searchTerm);
    }

    getTotalOfDaysToWatch() {
        return playlistOrganizer.calculateDaysToWatch(this.videos, this.minutesAvailable);
    }

    getFiveMostFrequentWords() {
        return wordsFrequency.calculeMostFrequentWords(this.videos);
    }
}

module.exports = VideosFinder;
