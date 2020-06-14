
//passar para classe? WordFrequency

// new WordFrequency(videos).calculateFiveMostFrequentWords()

function calculeMostFrequentWords(videos) {
    const text = 'a b c d e f g h a b f f f g g';
    const words = text.split(' ');

    const frequenciesList = getFrequencies(words);
    const sortedByFrequency = new Map([...frequenciesList.entries()].sort((a, b) => b[1] - a[1]));
    const firstFiveWords = [...sortedByFrequency].slice(0, 5);

    let fiveMostFrequentWords = getFiveMostFrequentWords(firstFiveWords);
    return fiveMostFrequentWords;
}

function getFiveMostFrequentWords(firstFiveWords) {
    let fiveMostFrequentWords = [];
    firstFiveWords.map((wordFrequency, i) => {
        const word = {
            word: wordFrequency[0],
            frequency: wordFrequency[1]
        };
        fiveMostFrequentWords.push(word);
    });
    return fiveMostFrequentWords;
}

function getFrequencies(words) {
    let frequency = new Map();
    words.map((word, i) => {
        if (frequency.has(word)) {
            let total = parseInt(frequency.get(word));
            frequency.set(word, total + 1);
        }
        else {
            frequency.set(word, 1);
        }
    });
    return frequency;
}

module.exports = {
    calculeMostFrequentWords
}
