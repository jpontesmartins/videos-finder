const { google } = require('googleapis');
const Video = require('../Video');
const dotenv = require('dotenv').config();

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

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

// function results() {
//     return (err, data) => {
//         if (err) {
//             console.log("errroooo");
//         }
//         //convert to video
//         if (data) {
//             const video = new Video(data.data.items[0])
//             // console.log(video.getInfo());
//             // return video;
//         }
//     };



module.exports = {
    search
}

search("lala");
