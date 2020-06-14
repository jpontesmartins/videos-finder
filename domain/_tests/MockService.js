const { mockResponse } = require('./videos-duration');

class MockServiceTotalDays {
    constructor() {
    }

    async search(term) {
        // console.log("MockService!");
        return new Promise((resolve, reject)=> {
            resolve(mockResponse);
        });
    }

}

module.exports = MockServiceTotalDays;
