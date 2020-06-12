const { mockResponse } = require('../ServiceVideo/Youtube/example-of-response');
const Video = require('./MockVideo');

//utilizar Command nos Services?
// example of call: const videos = new Service(new YotubeService()).search('term');
//

class MockService {
    constructor() {

    }

    search(term) {
        // call to API
        // MockResponse
        return this._getVideos(mockResponse);
    }

    _getVideos(videosFound) {
        let videos = []
        videosFound.map((mockItemResponse, i) => {
            const video = new Video(mockItemResponse);
            videos.push(video.convert());
        });
        return videos;
    }


}

module.exports = MockService;
