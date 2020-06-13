//DESCOMENTAR PARA TESTAR
//const YoutubeService = require('./YoutubeService');
const adapter = require('../adapter');

const service = new YoutubeService();

// service.search("teeeeeerm").then(videos => {
//     console.log("videos to watch!");
//     console.log(videos);
// })

service.search("teeeerm").then(result => {
    const videos = []
    result.map((video, i)=> {
        videos.push(adapter.fromYoutubeToVideoFinder(video));
    });
    console.log(videos);
});



//  duration: 'PT16M', 