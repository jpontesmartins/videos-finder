const PlaylistOrganizer = require('../index');

describe ('playlist organizer', () => {
    it ('shoudl return... 3 ', () => {
        const week = [5, 10]; //i
        const videos = [4, 6, 5]; //j
        
        const organizer = new PlaylistOrganizer(week, videos);
        const totalOfDays = organizer.getTotalOfDays();

        expect(totalOfDays).toBe(3);
    });

    it ('shoudl return...', () => {
        const week = [15, 120, 30, 150, 20, 40, 90]; //i
        const videos = [20, 30, 60, 90, 200, 30, 40, 20, 60, 15]; //j
        
        const organizer = new PlaylistOrganizer(week, videos);
        const totalOfDays = organizer.getTotalOfDays();
        
        expect(totalOfDays).toBe(8);
    });



});




