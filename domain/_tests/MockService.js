const { mockResponse } = require('./videos-duration');

class MockServiceTotalDays {
    constructor() {
    }

    async search(term) {
        return new Promise((resolve, reject)=> {
            resolve(mockResponse);
        });
    }

}

module.exports = MockServiceTotalDays;
