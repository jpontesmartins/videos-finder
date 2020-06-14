
class WordsFrequency {
    constructor(videos){
        this.videos = videos;
    }   

    calculeMostFrequentWords() {
        const text = this.getTextFromVideos();
        const words = text.split(' ');
    
        console.log(words);
        const frequenciesList = this.getFrequencies(words);
        const sortedByFrequency = new Map([...frequenciesList.entries()].sort((a, b) => b[1] - a[1]));
        const firstFiveWords = [...sortedByFrequency].slice(0, 5);
    
        let fiveMostFrequentWords = this.getFiveMostFrequentWords(firstFiveWords);
        return fiveMostFrequentWords;
    }
    
    getTextFromVideos() {
        console.log(this.videos);
        return 'a b c d e f g h a b f f f g g';
    }

    getFiveMostFrequentWords(firstFiveWords) {
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
    
    getFrequencies(words) {
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

}

module.exports = WordsFrequency;
