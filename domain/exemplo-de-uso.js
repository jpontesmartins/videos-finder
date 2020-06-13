const VideosFinder = require('./VideosFinder');
const YoutubeService = require('../services/ServiceVideo/Youtube/YoutubeService');




//TODO: 
// - tratar a conversão da duração que tem erro: 'PT16M' retornando NaN
// - async function ....
// - adapter no Service
// - remover ServiceVideo, deixar apenas services
//


const finder = new VideosFinder("cats",[1,2,3,4,5,6,7],new YoutubeService());
const videosToWatch = finder.searchVideosToWatch();
videosToWatch.then(videos => {
    console.log(videos);
})




