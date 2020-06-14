
class WordsFrequency {
    constructor(videos){
        this.videos = videos;
    }   

    calculeMostFrequentWords() {
        const text = this.getTextFromVideos();
        const words = text.split(' ');
    
        let sanitizedWords = this.sanitizeWords(words);
        
        const frequenciesList = this.getFrequencies(sanitizedWords);
        const sortedByFrequency = new Map([...frequenciesList.entries()].sort((a, b) => b[1] - a[1]));
        const firstFiveWords = [...sortedByFrequency].slice(0, 5);
    
        let fiveMostFrequentWords = this.getFiveMostFrequentWords(firstFiveWords);
        return fiveMostFrequentWords;
    }
    
    sanitizeWords(words) {
        const wordsToRemove = [' ', '', '-'];
        let sanitizedWords = [];
        words.map((word, w) => {
            if (!wordsToRemove.includes(word)) {
                sanitizedWords.push(word);
            }
        });
        return sanitizedWords;
    }

    getTextFromVideos() {
        let titlesAndDescriptions = [];
        if (this.videos) {
            this.videos.map((video, i) => {
                titlesAndDescriptions.push(video.title);
                titlesAndDescriptions.push(video.description);
            });
        }

        let words = titlesAndDescriptions.join(" ");
        return words;
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
