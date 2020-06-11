const VideosFinder = require('./index');

describe ('videos to watch', () => {
    it('should return 2 videos', () => {
        const searchTerm = "filosofia";
        const availableMinutes = [15, 120, 30, 150, 20, 40, 90];

        const videosFinder = new VideosFinder(searchTerm, availableMinutes, "youtube");
        expect(videosFinder.searchVideosToWatch().length).toBe(2);
    });

    it ('most frequent words', () => {
        const searchTerm = "filosofia";
        const availableMinutes = [15, 120, 30, 150, 20, 40, 90];

        const videosFinder = new VideosFinder(searchTerm, availableMinutes, "youtube");
        expect(videosFinder.getFiveMostFrequentWords()[0]).toBe("platao");
    });

    it ('total of days to watch all playlist', () => {
        const searchTerm = "filosofia";
        const availableMinutes = [15, 120, 30, 150, 20, 40, 90];

        const videosFinder = new VideosFinder(searchTerm, availableMinutes, "youtube");
        expect(videosFinder.getTotalOfDaysToWatch()).toBe(8);
    });

});


