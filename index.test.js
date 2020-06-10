const ahgora = require('./index');

describe ('videos to watch', () => {
    it('should return 2 videos', () => {
        const searchTerm = "filosofia";
        const availableMinutes = [15, 120, 30, 150, 20, 40, 90];

        expect(ahgora.searchVideos(searchTerm).length).toBe(2);
    });

    it ('most frequent words', () => {
        const searchTerm = "filosofia";
        const videos = ahgora.searchVideos(searchTerm);
        expect(ahgora.calculeMostFrequentWords(videos)[0]).toBe("platao");
    });

    it ('total of days to watch all playlist', () => {
        const availableMinutes = [15, 120, 30, 150, 20, 40, 90];
        const searchTerm = "filosofia";
        const videos = ahgora.searchVideos(searchTerm);

        expect(ahgora.calculateDaysToWatch(videos, availableMinutes)).toBe(8);
    });

});


