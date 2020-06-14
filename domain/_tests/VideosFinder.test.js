const VideosFinder = require('../VideosFinder');
const MockService = require('../../services/_tests/MockService');

describe('videos to watch', () => {
    it('should return 2 videos', () => {
        const searchTerm = "cats";
        const week = [15, 120, 30, 150, 20, 40, 90];
        const videosFinder = new VideosFinder(searchTerm, week, new MockService());

        videosFinder.searchVideosToWatch().then(videos => {
            expect(videos.length).toBe(2);
        });

    });

    it('most frequent words', () => {
        const searchTerm = "cats";
        const availableMinutes = [15, 120, 30, 150, 20, 40, 90];

        const videosFinder = new VideosFinder(searchTerm, availableMinutes, new MockService());

        videosFinder.getFiveMostFrequentWords().then(frequencies => {
            expect(frequencies[0]).toEqual({ "frequency": 4, "word": "f" });
        }).catch(err => {
            console.log(err);
        })

    });

    it('total of days to watch all playlist', () => {
        const searchTerm = "cats";
        const week = [15, 120, 30, 150, 20, 40, 90];

        const videosFinder = new VideosFinder(searchTerm, week, new MockService());

        videosFinder.getTotalOfDaysToWatch().then(result => {
            // console.log(result[0].id);
            expect(result[0].id).toBe("S3IMBSQCa7Y");
        }).catch(err => {
            console.error(err);
        });

    });

});


