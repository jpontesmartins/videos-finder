
class PlaylistOrganizer {
    constructor(week, videos) {
        this.week = week;
        this.videos = videos;
    }

    calculate() {
        let sizeWeek = this.week.length - 1;
        let sizeVideos = this.videos.length - 1;
        let totalDays = 0;
        let exit = false;
        let dayIndex = 0;
        let videoIndex = 0;

        while (!exit) {
            if (videoIndex > sizeVideos) {
                break;
            }
            console.log("aaaaaa!");
    
            let tempoDisponivel = this.week[dayIndex];
            let tempoDoVideo = this.videos[videoIndex];
    
            // ignora videos grandes
            tempoDoVideo = this.ignoreTooLongVideos(tempoDoVideo, videoIndex);
    
            // a cada dia eu vejo quais que eu posso assistir
            let sumDurationVideos = 0;
            let sair2 = false
            while (!sair2) {
            console.log("bbbbbbbb!");

                tempoDoVideo = this.videos[videoIndex];
                sumDurationVideos += tempoDoVideo;
    
                // tempo disponivel > soma dos videos
                if (tempoDisponivel > sumDurationVideos) {
                    videoIndex++;
                    if (videoIndex > sizeVideos) {
                        break;
                    }
                }
    
                // tempo disponivel < soma dos videos
                if (tempoDisponivel < sumDurationVideos) {
                    totalDays++;
                    sumDurationVideos = 0;
                    if (dayIndex == sizeWeek) {
                        dayIndex = 0;
                    } else {
                        dayIndex++;
                    }
    
                    sair2 = true;
                }
    
                // tempo disponivel igual o do video
                if (tempoDisponivel == tempoDoVideo) {
                    totalDays++;
                    videoIndex++;
    
                    dayIndex = dayIndex == sizeWeek ? 0 : dayIndex++;
    
                    if (videoIndex > sizeVideos) {
                        break;
                    }
                }
    
            }
    
        }
    
        return totalDays
    }


    ignoreTooLongVideos(tempoDoVideo, videoIndex) {
        const longestAvailableTime = [...this.week].sort((a, b) => b - a)[0];

        if (tempoDoVideo >= longestAvailableTime) {
            videoIndex++;
            tempoDoVideo = this.videos[videoIndex];
        }
        return tempoDoVideo;
    }

    getTotalOfDays() {
        return this.calculate();
    }


}

module.exports = PlaylistOrganizer