const playlistOrganizer = require('../index');

// - The user will input how much time he can expend daily during a week. For
// example, [15, 120, 30, 150, 20, 40, 90] in minutes.

// - The user will not expend more time watching videos than his daily max.

// - The user will not start another video unless he can finish on the same day.

// - Videos longer than the longest day will be ignored.

// - The user will watch the videos in the exact order as returned.


describe ('playlist organizer', () => {
    it('should return 8 days to watch', () => {
        const availableMinutes = [15, 120, 30, 150, 20, 40, 90];
        const videosDuration = [20, 30, 60, 90, 200, 30, 40, 20, 60, 15]
        
        const totalOfDays = playlistOrganizer.calculateDaysToWatch(videosDuration, availableMinutes);
        
        expect(totalOfDays).toBe(8);
    });
});




