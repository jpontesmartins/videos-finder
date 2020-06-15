const adapter = require('./adapter');

class Service {
    constructor(service) {
        this.service = service;
        this.videos = [];
    }

    async searchVideos(searchTerm) {
        console.log(searchTerm);
        const videos = await this.service.search(searchTerm);

        const convertedVideos = []
        videos.map((video, i) => {
            convertedVideos.push(adapter.toVideo(video));
        });

        return convertedVideos;
    }
    
}

module.exports = Service;