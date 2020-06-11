

class Video {
    constructor(youtubeVideo) {
        this.videoInfo = youtubeVideo;
    }

    getInfo(){
        const info = {
            id: this.videoInfo.id, 
            title: this.videoInfo.snippet.title, 
            description: this.videoInfo.snippet.description, 
            duration: this.videoInfo.contentDetails.duration 
        }
        return info;
    }

}

module.exports = Video;