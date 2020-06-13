
function calculateDaysToWatch(videos, minutesAvailable) {

    const available = [...minutesAvailable];

    let totalOfDays = 0;
    for (let i = 0; i < available.length; i++) {
        // console.log(`today you have ${available[i]} minutes available to watch something`);
        const minutesForToday = available[i];

        for (let j = 0; j < videos.length; j++) {
            // console.log(`options: ${playlist[j]}`);
            const videoDuration = videos[j];
            if (videoDuration > minutesForToday) {
                // jump to next day, nothing will be watched today

            } else {
                totalOfDays++;
            }
        }
    }

    return totalOfDays;
}

module.exports = {
    calculateDaysToWatch
}