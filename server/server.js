const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const cors = require("cors");

const VideosFinder = require('./domain/VideosFinder');
// const YoutubService = require('./services/Youtube/YoutubeService');
const MockService = require('./services/_tests/MockService');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/search', async (req, res) => {
    const videoFinder = new VideosFinder("dogs", [30, 60], new MockService());
    // const videoFinder = new VideosFinder("dogs", [200, 100], new YoutubService());

    const videos = await videoFinder.searchVideosToWatch();
    const totalOfDays = await videoFinder.getTotalOfDaysToWatch();
    const moreFrequentWords = await videoFinder.getFiveMostFrequentWords();

    const response = {
        videos,
        totalOfDays,
        moreFrequentWords
    }
    res.send(response);

});


app.listen(port, () => console.log(`Listening on port ${port}`));

