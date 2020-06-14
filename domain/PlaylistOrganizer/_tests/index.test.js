// const PlaylistOrganizer = require('../index');
const Organizer = require('../Organizer');

describe ('playlist organizer', () => {
    it ('should return 3 days to watch ', () => {
        const week = [5, 10]; //i
        const videos = [4, 6, 5]; //j
        
        expect(new Organizer(week, videos).calculateDaysToWatch()).toBe(3);
    });

    it ('shoudl return 8 days to watch', () => {
        const week = [15, 120, 30, 150, 20, 40, 90]; //i
        const videos = [20, 30, 60, 90, 200, 30, 40, 20, 60, 15]; //j
        
        expect(new Organizer(week, videos).calculateDaysToWatch()).toBe(8);
    });



});




