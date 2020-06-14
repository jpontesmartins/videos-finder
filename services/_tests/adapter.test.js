const { mockResponse } = require('../Youtube/example-of-pure-response');
const YoutubeVideo = require('../Youtube/YoutubeVideo');

describe('adapter convertions', () => {

    it('should convert PT16M to 160', async () => {
        const youtubeVideo = new YoutubeVideo(mockResponse[0]) 

        expect(mockResponse[0].contentDetails.duration).toBe("PT16M");
        expect(youtubeVideo.convert().duration).toBe(960);
    });

    it('should convert PT2M24S to 144', async () => {
        const youtubeVideo = new YoutubeVideo(mockResponse[1]) 

        expect(mockResponse[1].contentDetails.duration).toBe("PT2M24S");
        expect(youtubeVideo.convert().duration).toBe(144);
    });

});