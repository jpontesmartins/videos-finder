const YoutubeVideo = require('./Youtube/YoutubeVideo');

function toVideo(youtubeVideo) {
    const video = new YoutubeVideo(youtubeVideo);
    return video.convert();
}

module.exports = {
    toVideo
}



