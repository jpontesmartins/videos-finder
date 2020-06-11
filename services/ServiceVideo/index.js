const youtubeService = require('./youtubeService');
const manualService = require('./manualService');

class Service {
    constructor(platform) {
        this.platform = platform;
    }

    searchVideos(searchTerm) {
        let videos = [];
        if (this.platform === "youtube") {
            console.log("youtube");
            videos = youtubeService.search(searchTerm);
        } else {
            console.log("manual");
            videos = manualService.search(searchTerm);
        }
        return videos;
    }

}

module.exports = Service;