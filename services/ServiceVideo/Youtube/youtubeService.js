const { google } = require('googleapis');
const dotenv = require('dotenv').config();

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

//converter para uma classe... -> YoutubeService
// separar em Promisses...
// cuidar para não extrapolar a quota

// 1. authenticate
// 2. search N videos about 'cats'
// 3. search by id each video in N 

//authenticate
const youtube = google.youtube({
    version: "v3",
    auth: YOUTUBE_API_KEY
});

async function search(term) {
    const allVideos = await searchFullinfo();
    console.log(allVideos);
}


function abc(){
    const aaaa = new Promise(async (resolve, reject) => {
        const allVideos = await searchOnYoutube();
        console.log(allVideos);
        allVideos.map(async (video, i) => {
            console.log(video);
            // let fullInfoVideo = await getVideoById(video);
            // console.log(fullInfoVideo);
            // videoss.push(fullInfoVideo);
        });
    });

    aaaa.then(data => {
        console.log(data);
    });

}


async function searchFullinfo() {
    const videos = await abc();
    console.log("videosssss");
    console.log(videos);
    return videos;

}

function getVideoById(video) {
    return new Promise((resolve, reject) => {
        youtube.videos.list({
            part: 'id, snippet, contentDetails',
            id: video.id.videoId
        }, (err, data) => {
            if (data) {
                resolve(data.data.items);
            } else {
                reject(data);
            }
        });
    });
}

function searchOnYoutube() {
    return new Promise((resolve, reject) => {
        youtube.search.list({
            part: 'id, snippet',
            q: 'cats',
            videoDuration: 'any',
            maxResults: 2
        }, (err, data) => {
            if (data) {
                resolve(data.data.items);
            }
            else {
                reject(err);
            }
        });
    });
}


module.exports = {
    search
}

search("lala");
