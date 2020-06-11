class Service {
    constructor(service) {
        this.service = service;
    }

    searchVideos(searchTerm) {
        return this.service.search(searchTerm);
    }

}

module.exports = Service;