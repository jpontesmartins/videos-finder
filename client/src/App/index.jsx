import React, { Component, Fragment } from 'react';
import axios from "axios";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    axios
      .get("http://localhost:5000/real")
      .then(({ data }) => {
        console.log(data);
      });

}

  render() {

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
      backgroundColor: "#B00",
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

          <div>
            videos descripion;
          </div>

          <div>
            most 5 frequent words;
          </div>

          <div>
            total days to watch;
          </div>

        </div>

      </Fragment>
    );
  }
}

export default App;
