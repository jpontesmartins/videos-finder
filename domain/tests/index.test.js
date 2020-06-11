const VideosFinder = require('../index');
const mockService = require('./mockService');

describe ('videos to watch', () => {
    it('should return 2 videos', () => {
        const searchTerm = "filosofia";
        const availableMinutes = [15, 120, 30, 150, 20, 40, 90];

        const videosFinder = new VideosFinder(searchTerm, availableMinutes, mockService);
        expect(videosFinder.searchVideosToWatch().length).toBe(2);
    });

    it ('most frequent words', () => {
        const searchTerm = "filosofia";
        const availableMinutes = [15, 120, 30, 150, 20, 40, 90];

        const videosFinder = new VideosFinder(searchTerm, availableMinutes, mockService);
        expect(videosFinder.getFiveMostFrequentWords()[0]).toBe("platao");
    });

    it ('total of days to watch all playlist', () => {
        const searchTerm = "filosofia";
        const availableMinutes = [15, 120, 30, 150, 20, 40, 90];

        const videosFinder = new VideosFinder(searchTerm, availableMinutes, mockService);
        expect(videosFinder.getTotalOfDaysToWatch()).toBe(8);
    });

});


