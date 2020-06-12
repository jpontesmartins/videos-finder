const VideosFinder = require('../VideosFinder');
const MockService = require('../../services/_tests/MockService');

describe ('videos to watch', () => {
    it('should return 10 videos', () => {
        const searchTerm = "filosofia";
        const availableMinutes = [15, 120, 30, 150, 20, 40, 90];

        const videosFinder = new VideosFinder(searchTerm, availableMinutes, new MockService());
        expect(videosFinder.searchVideosToWatch().length).toBe(10);
    });

    it ('most frequent words', () => {
        const searchTerm = "filosofia";
        const availableMinutes = [15, 120, 30, 150, 20, 40, 90];

        const videosFinder = new VideosFinder(searchTerm, availableMinutes, new MockService());
        expect(videosFinder.getFiveMostFrequentWords()[0]).toEqual({"frequency": 4, "word": "f"});
    });

    it ('total of days to watch all playlist', () => {
        const searchTerm = "filosofia";
        const availableMinutes = [15, 120, 30, 150, 20, 40, 90];

        const videosFinder = new VideosFinder(searchTerm, availableMinutes, new MockService());
        expect(videosFinder.getTotalOfDaysToWatch()).toBe(8);
    });

});


