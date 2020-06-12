const Service = require('../ServiceVideo');

const MockService = require('./MockService');

describe('service video ', () => {
    it('should return mockResponse', () => {
        const service = new Service(new MockService());
        expect(service.searchVideos("cats").length).toBe(10);
    });

    it('should return duration in seconds', () => {
        const service = new Service(new MockService());
        const videosFound = service.searchVideos("cats");

        expect(videosFound[0].duration).toBe(144);
        expect(videosFound[1].duration).toBe(602);
        expect(videosFound[2].duration).toBe(637);
        expect(videosFound[3].duration).toBe(946);
    });

    it ('should return an object from Video entity', () => {
        const service = new Service(new MockService());
        const videosFound = service.searchVideos("cats");

        const first = videosFound[0];
        expect(first.id).toBeDefined();
        expect(first.title).toBeDefined();
        expect(first.description).toBeDefined();
        expect(first.duration).toBeDefined();

    });


    it('should return video-response to Video entity', () => {
        // const service = new Service(MockService);
        // before conversion (in minutes)
        // expect(service.getVideos()[0].duration).toBe("PT2M24S");
    });

});