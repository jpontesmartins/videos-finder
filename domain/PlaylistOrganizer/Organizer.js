
class Organizer {
    constructor(week, videos) {
        this.week = week;
        this.videos = videos;
    }

    calculateDaysToWatch() {
        let sizeWeek = this.week.length-1;
        let sizeVideos = this.videos.length-1;
    
        let totalDays = 0;
        let sair=false;
        let w = 0;
        let d = 0;
        while(!sair) {
            if (d > sizeVideos) {
                break;
            }
            let tempoDisponivel = this.week[w];
            let tempoDoVideo = this.videos[d];
    
            if (tempoDoVideo >= 200) {
                d++;
                tempoDoVideo = this.videos[d];
            }
    
            let sumDurationVideos = 0;
            let sair2 = false
            while (!sair2) {
                
                tempoDoVideo = this.videos[d];
                sumDurationVideos += tempoDoVideo;
    
                if(tempoDisponivel > sumDurationVideos) {
                    d++;  //vou para o proximo video
                    
                    if (d > sizeVideos) {
                        // totalDays++;
                        break;
                    }
                }
    
                if (tempoDisponivel < sumDurationVideos) {
                    totalDays++;
    
                    sumDurationVideos = 0;
                    if (w == sizeWeek) {
                        w = 0;
                    } else {
                        w++;
                    }
    
                    if (d == sizeVideos && w == sizeWeek) {
                        sumDurationVideos = 0;
                    }
                    sair2 = true;
                }
    
                if (tempoDisponivel == tempoDoVideo) {
                    totalDays++;
                    d++;
                    if (w == sizeWeek) {
                        w = 0;
                    } else {
                        w++;
                    }
    
                    if (d > sizeVideos) {
                        break;
                    }
    
                }
    
            }
    
        }
    
        return totalDays
    
    }

}

module.exports = Organizer;