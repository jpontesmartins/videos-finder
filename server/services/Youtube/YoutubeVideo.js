
class Video {
    constructor(youtubeVideo) {
        this.info = youtubeVideo;
    }

    convert(){
        return {
            id: this.info.id, 
            title: this.info.snippet.title, 
            description: this.info.snippet.description, 
            duration: this._minutesToSeconds() 
        }
    }

    _minutesToSeconds() {
        console.log(" ------ this.info ------ ");
        console.log(this.info);

        const minutes = this.info.contentDetails.duration.split("M")[0].replace("PT","");
        let seconds = (this.info.contentDetails.duration.split("M")[1]).replace("S","");
        if (!seconds) seconds = 0;
        
        const minutesInSeconds = parseInt(minutes) * 60;
        const total = minutesInSeconds + parseInt(seconds);

       return total;
   }

}

module.exports = Video;

