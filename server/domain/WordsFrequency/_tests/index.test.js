const WordFrequency = require('../index');

const { mockVideos } = require('./mockVideosList');

describe('words frequency', () => {
    it('should return 5 most frequent words', () => {

        let wordFrequency = new WordFrequency(mockVideos);
        const result = wordFrequency.calculeMostFrequentWords();

        expect(result[0]).toEqual({ frequency: 3, word: "Funny" });
        expect(result[1]).toEqual({ frequency: 2, word: "CATS" });
        expect(result[2]).toEqual({ frequency: 2, word: "you" });
        expect(result[3]).toEqual({ frequency: 2, word: "will" });
        expect(result[4]).toEqual({ frequency: 2, word: "Cats" });
    });
});
