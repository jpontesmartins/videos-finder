const VideosFinder = require('../VideosFinder');
const MockService = require('./MockService');

describe('videos to watch', () => {
    it('should return 2 videos', async () => {
        const searchTerm = "cats";
        const week = [15, 120, 30, 150, 20, 40, 90];
        const videosFinder = new VideosFinder(searchTerm, week, new MockService());

        const videos = await videosFinder.searchVideosToWatch();
        expect(videos.length).toBe(10);

    });

    it('most frequent words', async () => {
        const searchTerm = "cats";
        const availableMinutes = [15, 120, 30, 150, 20, 40, 90];

        const videosFinder = new VideosFinder(searchTerm, availableMinutes, new MockService());

        const frequencies = await videosFinder.getFiveMostFrequentWords();
        expect(frequencies[0]).toEqual({ "frequency": 20, "word": "um" });
        expect(frequencies[1]).toEqual({ "frequency": 10, "word": "O" });
        expect(frequencies[2]).toEqual({ "frequency": 10, "word": "JOGO" });
        expect(frequencies[3]).toEqual({ "frequency": 10, "word": "DOS" });
        expect(frequencies[4]).toEqual({ "frequency": 10, "word": "GATOS" });

    });

    it('total of days to watch all playlist', async () => {
        const searchTerm = "cats";
        const weekInMinutes = [15, 120, 30, 150, 20, 40, 90];
        const videosFinder = new VideosFinder(searchTerm, weekInMinutes, new MockService());

        const totalOfDays = await videosFinder.getTotalOfDaysToWatch();
        expect(totalOfDays).toBe(8);

    });

});


