const { mockResponse } = require('./example-both');

class MockService {
    constructor() {
    }

    async search(term) {
        return new Promise((resolve, reject)=> {
            resolve(mockResponse);
        });
    }

}

module.exports = MockService;
