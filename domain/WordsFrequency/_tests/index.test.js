const wordFrequency = require('../index');

const { videos } = require('./mockVideosList');

describe('words frequency', () => {
    it('should return 5 most frequent words', () => {
        const result = wordFrequency.calculeMostFrequentWords(videos);

        expect(result[0]).toEqual({ frequency: 4, word: "f" });
        expect(result[1]).toEqual({ frequency: 3, word: "g" });
        expect(result[2]).toEqual({ frequency: 2, word: "a" });
        expect(result[3]).toEqual({ frequency: 2, word: "b" });
        expect(result[4]).toEqual({ frequency: 1, word: "c" });
    });
});
