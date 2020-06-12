const { mockResponse } = require('./Youtube/example-of-response');

class Service {
    constructor(service) {
        this.service = service;
        this.videosBefore = [];
        this.videosAfter = [];
    }

    searchVideos(searchTerm) {
        this.videosBefore = this.service.search(searchTerm);
        return this.videosBefore;
    }

    convertVideos() {
        // this.videosBefore
        // processing...
        // this.videosAfter

        console.log(mockResponse.length);
        console.log(mockResponse[0]);

        mockResponse.map((item, i) => {
            console.log(`item: ${i}`)
            console.log(`title: ${item.title}`);

            //transform duration to seconds
            let duration = item.duration.replace("PT", "");
            duration = duration.replace("M", "min");
            duration = duration.replace("S", "sec");

            console.log(`duration: ${duration}`);
        });

    }

}

module.exports = Service;