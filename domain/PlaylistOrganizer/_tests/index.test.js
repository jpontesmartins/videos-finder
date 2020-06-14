const playlistOrganizer = require('../index3');

// - The user will input how much time he can expend daily during a week. For
// example, [15, 120, 30, 150, 20, 40, 90] in minutes.

// - The user will not expend more time watching videos than his daily max.

// - The user will not start another video unless he can finish on the same day.

// - Videos longer than the longest day will be ignored.

// - The user will watch the videos in the exact order as returned.


describe ('playlist organizer', () => {
    it ('shoudl return...', () => {
        const week = [5, 10]; //i
        const videos = [4, 6, 5]; //j
        
        const totalOfDays = playlistOrganizer.calculateDaysToWatch(videos, week);
        
        expect(totalOfDays).toBe(3);
    });

    it ('shoudl return...', () => {
        const week = [15, 120, 30, 150, 20, 40, 90]; //i
        const videos = [20, 30, 60, 90, 200, 30, 40, 20, 60, 15]; //j
        
        const totalOfDays = playlistOrganizer.calculateDaysToWatch(videos, week);
        
        expect(totalOfDays).toBe(8);
    });



});




