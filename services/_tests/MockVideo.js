
class MockVideo {
    constructor(video) {
        this.info = video;
    }

    convert(){
        return {
            id:  this.info.id, 
            title:  this.info.title, 
            description: this.info.description, 
            duration: this._minutesToSeconds() 
        };
    }


    _minutesToSeconds() {
         const minutes = this.info.duration.split("M")[0].replace("PT","");
         const seconds = (this.info.duration.split("M")[1]).replace("S","");
         
         const minutesInSeconds = parseInt(minutes) * 60;
         const total = minutesInSeconds + parseInt(seconds);
        return total;
    }
}

module.exports = MockVideo;