const Service = require('../index');
const MockService = require('./MockService');

describe('service video ', () => {

    it('should return mockResponse', async () => {
        const service = new Service(new MockService());

        service.searchVideos("cats").then(result => {
            expect(result.length).toBe(2);
        })

    });

    it('should return duration in seconds', async () => {
        const service = new Service(new MockService());

        const found = await service.searchVideos("cats");
        expect(found[0].duration).toBe(960);
        expect(found[1].duration).toBe(144);

    });

    it('should return an object from Video entity', async () => {
        const service = new Service(new MockService());
        const videos = await service.searchVideos("cats");

        const first = videos[0];
        expect(first.id).toBeDefined();
        expect(first.title).toBeDefined();
        expect(first.description).toBeDefined();
        expect(first.duration).toBeDefined();
    });

});