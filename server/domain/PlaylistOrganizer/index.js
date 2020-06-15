
class Organizer {
    constructor(week, videos) {
        this.week = week;
        this.videos = videos;
    }

    calculateDaysToWatch() {
        let sizeWeek = this.week.length - 1;
        let sizeVideos = this.videos.length - 1;
        let totalDays = 0;
        let exit = false;
        let dayInWeekIndex = 0;
        let videoIndex = 0;

        while (!exit) {
            if (videoIndex > sizeVideos) break;

            let availableTime = this.week[dayInWeekIndex];
            let durationVideo = this.videos[videoIndex];

            //ignore if video too long 
            if (durationVideo >= this.longestAvailableTime()) {
                // this.videos[videoIndex] = 0;
                console.log("ignore video!!!!");
                videoIndex++;
                durationVideo = this.videos[videoIndex];
            }

            let sumDurationVideos = 0;
            let sair2 = false
            while (!sair2) {
                durationVideo = this.videos[videoIndex];
                sumDurationVideos += durationVideo;

                // tempo disponivel MAIOR que a soma dos videos
                if (availableTime > sumDurationVideos) {
                    videoIndex++;
                    if (videoIndex > sizeVideos) {
                        break;
                    }
                }

                // tempo disponivel MENOR que a soma dos videos
                if (availableTime < sumDurationVideos) {
                    totalDays++;
                    sumDurationVideos = 0;

                    if (dayInWeekIndex == sizeWeek) {
                        dayInWeekIndex = 0;
                    } else {
                        dayInWeekIndex++;
                    }

                    sair2 = true;
                }

                //tempo igual
                if (availableTime == durationVideo) {
                    totalDays++;
                    videoIndex++;
                    dayInWeekIndex = (dayInWeekIndex == sizeWeek) ? 0 : dayInWeekIndex++;

                    if (videoIndex > sizeVideos) {
                        break;
                    }

                }

            }

        }
        return totalDays
    }

    longestAvailableTime() {
        return [...this.week].sort((a, b) => b - a)[0];
    }
}

module.exports = Organizer;