class Service {
    constructor(service) {
        this.service = service;
        this.videos = [];
    }

    searchVideos(searchTerm) {
        return this.service.search(searchTerm);
    }
    
}

module.exports = Service;