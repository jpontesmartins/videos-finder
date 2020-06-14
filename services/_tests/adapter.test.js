// const Service = require('../index');
// const MockService = require('./MockService');
const { mockResponse } = require('../Youtube/example-of-pure-response');
const YoutubeVideo = require('../Youtube/YoutubeVideo');

const adapter = require('../adapter');

describe('adapter convertions', () => {

    it('should convert from YoutubeVideo to Video', async () => {
        const youtubeVideo = new YoutubeVideo(mockResponse[0]);
        // console.log(mockResponse[0].id);
        // console.log(mockResponse[0].contentDetails.duration);
        expect(youtubeVideo.convert().duration).toBe("PT16M");
        // expect(mockResponse[0].contentDetails.duration).toBe("PT16M");

    });

});