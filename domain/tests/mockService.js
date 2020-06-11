
function search(term) {
    const video1 = {
        title: "title1",
        description: "description1, platao",
        minutes: 20
    }
    const video2 = {
        title: "title2 platao",
        description: "description2",
        minutes: 30
    }

    const videosFound = [video1, video2];
    return videosFound;
}

module.exports = {
    search
}
