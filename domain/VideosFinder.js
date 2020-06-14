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
        return this.videos;
        // return 0;
        // agora eu tenho a lista de videos aqui...
        // tenho que percorre-la comparando as duracoes
        // transformar o Organizer para ler objeto e nao integer

        // return new Organizer(this.minutesAvailable, this.videos).calculateDaysToWatch();
    }

    async getFiveMostFrequentWords() {
        if (this.videos.length == 0) {
            this.videos = await this.searchVideosToWatch();
        }
        return wordsFrequency.calculeMostFrequentWords(this.videos);
    }
}

module.exports = VideosFinder;
