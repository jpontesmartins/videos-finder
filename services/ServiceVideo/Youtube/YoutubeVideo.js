
class Video {
    constructor(youtubeVideo) {
        this.info = youtubeVideo;
    }

    getInfo(){
        return {
            id: this.info.id, 
            title: this.info.snippet.title, 
            description: this.info.snippet.description, 
            duration: this._minutesToSeconds() 
        }
    }

    _minutesToSeconds() {
        const minutes = this.info.contentDetails.duration.split("M")[0].replace("PT","");
        const seconds = (this.info.contentDetails.duration.split("M")[1]).replace("S","");
        
        const minutesInSeconds = parseInt(minutes) * 60;
        const total = minutesInSeconds + parseInt(seconds);
       return total;
   }

}

module.exports = Video;