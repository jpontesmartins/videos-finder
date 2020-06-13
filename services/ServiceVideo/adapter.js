const YoutubeVideo = require('./Youtube/YoutubeVideo');

function fromYoutubeToVideoFinder(youtubeVideo) {
    const video = new YoutubeVideo(youtubeVideo);
    return video.convert();
}

module.exports = {
    fromYoutubeToVideoFinder
}



