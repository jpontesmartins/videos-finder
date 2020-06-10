
//input
const searchTerm = "filosofia";
const minutesAvailable = [15, 120, 30, 150, 20, 40, 90]

//processing
//service as a interface to detail (api youtube)
const videos = searchVideos(searchTerm);

function searchVideos(searchTerm) {
    const video1 = {
        title: "title1",
        description: "description1, platao",
        minutes: 20
    }
    const video2 = {
        title: "title2 platao",
        description: "description2",
        minutes: 30
    }

    const result = [video1, video2];

    return result; 
}

const fiveMostFrequentWords = calculeMostFrequentWords(videos);

function calculeMostFrequentWords(videos) {
    const word1 = "platao";
    return [word1];
}

const totalOfDaysToWatch = calculateDaysToWatch(videos, minutesAvailable);

function calculateDaysToWatch(videos, minutesAvailable) {
    const totalOfDays = 8;
    return totalOfDays;
}

//output
const result = {
    fiveMostFrequentWords,
    totalOfDaysToWatch
}

module.exports = {
    searchVideos,
    calculeMostFrequentWords,
    calculateDaysToWatch,
}

