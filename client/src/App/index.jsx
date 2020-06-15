import React, { Component, Fragment } from 'react';
import axios from "axios";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      totalOfDays: 1,
      moreFrequentWords: []
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    axios
      .get("http://localhost:5000/search")
      .then(({ data }) => {
        this.setState({
          videos: data.videos,
          totalOfDays: data.totalOfDays,
          moreFrequentWords: data.moreFrequentWords
        });

        console.log("this.state.videos");
        this.state.videos.map((video, i) => {
          console.log(video.title);
        })
        console.log(`total of days: ${this.state.totalOfDays}`);
        console.log(`frequent words: `);
        this.state.moreFrequentWords.map((word, i)=> {
          console.log(`word: ${word.word}`)
        })

      });

  }

  showVideos() {
    console.log(this.state.videos);
    return this.state.videos
  }

  render() {

    let titleVideos = []
    this.state.videos.map((video, i) => {
      titleVideos.push(video.title);
    });

    console.log(titleVideos);

    let wordsFrequncy = []
    this.state.moreFrequentWords.map((word, i) => {
      wordsFrequncy.push(word);
    });
    console.log(wordsFrequncy);

    const main = {
      fontSize: "20px",
      backgroundColor: "#FF",
      boxShadow: "0 2px 8px 0 #444",
      margin: "10px",
      padding: "10px"
    }
    const card = {
      backgroundColor: "#CCC",
      margin: "10px",
      padding: "10px"
    }

    const button = {
      backgroundColor: "#088",
      fontSize: "20px",
      color: "#FFF",
      margin: "10px",
      padding: "10px"
    }

    const features = {
      backgroundColor: "#088",
      fontSize: "20px",
      color: "#FFF",
      margin: "10px",
      padding: "10px"
    }

    return (
      <Fragment>

        <div style={main}>
          <h1> Videos Finder </h1>

          <div >

            <div style={card}>
              <div>Search Term</div>
              <div>
                <input type="text" placeholder="search term" />
              </div>
            </div>

            <div style={card}>
              <div>Available time per day in minutes</div>
              <div>
                <input type="text" placeholder="10, 20, 30, 40, 50, 60, 70" />
              </div>
            </div>

          </div>

          <div style={card}>
            <input type="button" value="search" style={button}
              onClick={this.handleClick} />
          </div>

          <div style={features}>
            videos description;
          </div>

          <div style={features}>
            most 5 frequent words;
          </div>

          <div style={features}>
            total days to watch;
          </div>

        </div>

      </Fragment>
    );
  }
}

export default App;
