const Organizer = require('../index');

describe ('playlist organizer', () => {
    it ('should return 3 days to watch ', () => {
        const week = [5, 10];
        const videos = [4, 6, 5];
        
        expect(new Organizer(week, videos).calculateDaysToWatch()).toBe(3);
    });

    it ('shoudl return 8 days to watch', () => {
        const week = [15, 120, 30, 150, 20, 40, 90];
        const videos = [20, 30, 60, 90, 200, 30, 40, 20, 60, 15];
        
        expect(new Organizer(week, videos).calculateDaysToWatch()).toBe(8);
    });

    it ('shoudl return 1 day to watch', () => {
        const week = [ 10, 20 ];
        const videos = [ 6, 4 ];
        
        expect(new Organizer(week, videos).calculateDaysToWatch()).toBe(1);
    });

    it ('shoudl return 1 day to watch', () => {
        const week = [ 10, 20 ];
        const videos = [ 10 ];
        
        expect(new Organizer(week, videos).calculateDaysToWatch()).toBe(1);
    });

});

