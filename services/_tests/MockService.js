const { mockResponse } = require('../../services/Youtube/example-both');

class MockService {
    constructor() {
    }

    async search(term) {
        // console.log("MockService!");
        return new Promise((resolve, reject)=> {
            resolve(mockResponse);
        });
    }

}

module.exports = MockService;
