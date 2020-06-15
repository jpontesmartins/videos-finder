const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const cors = require("cors");

const VideosFinder = require('./domain/VideosFinder');
const YoutubeService = require('./services/Youtube/YoutubeService');
const MockService = require('./services/_tests/MockService');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/search', async (req, res) => {
    const { term, weekConverted } = validateFields(req);

    // const videoFinder = new VideosFinder("dogs", [30, 60], new MockService());
    // const videoFinder = new VideosFinder(term, weekConverted, new MockService());
    const videoFinder = new VideosFinder(term, weekConverted, new YoutubeService());

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

function validateFields(req) {
    let term = req.query.searchTerm;
    let week = req.query.week;

    if (term == 'undefined') term = "dogs";
    if (week == 'undefined') week = "30 50";

    let weekSeparated = week.split(" ");
    const weekConverted = []
    weekSeparated.map((week, w)=>{
        weekConverted.push(parseInt(week));
    });

    return { term, weekConverted };
}

