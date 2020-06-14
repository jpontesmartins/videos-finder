const Service = require('../index');
const MockService = require('./MockService');

describe('service video ', () => {

    it('should return mockResponse', async () => {
        const service = new Service(new MockService());

        service.searchVideos("cats").then(result => {
            expect(result.length).toBe(2);
        })

    });

    it('should return duration in seconds', () => {
        const service = new Service(new MockService());
        service.searchVideos("cats").then(videos => {
            expect(videos[0].duration).toBe(NaN);
            // expect(videos[1].duration).toBe(602);
            // expect(videos[2].duration).toBe(637);
            // expect(videos[3].duration).toBe(946);
        });

    });

    // it ('should return 16*60 sec', () => {
    //     // duration: 'PT16M',
    //     // expect('PT16M').toBe(16*60);

    // });

    it ('should return an object from Video entity', () => {
        const service = new Service(new MockService());

        service.searchVideos("cats").then(videos => {
            const first = videos[0];
            // console.log(first);
            expect(first.id).toBeDefined();
            expect(first.title).toBeDefined();
            expect(first.description).toBeDefined();
            expect(first.duration).toBeDefined();
        });

    });


    // it('should return video-response to Video entity', () => {
    //     // const service = new Service(MockService);
    //     // before conversion (in minutes)
    //     // expect(service.getVideos()[0].duration).toBe("PT2M24S");
    // });

});