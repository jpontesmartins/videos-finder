const VideosFinder = require('./VideosFinder');
// const YoutubeService = require('../services/Youtube/YoutubeService');
const MockService = require('../services/_tests/MockService');



//TODO: 

// const finder = new VideosFinder("cats",[1,2,3,4,5,6,7],new YoutubeService());

const finder = new VideosFinder("cats", [1,2,3,4,5,6,7], new MockService());
const videosToWatch = finder.searchVideosToWatch();
videosToWatch.then(videos => {
    console.log(videos);
})




