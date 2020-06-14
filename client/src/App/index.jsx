import React, { Component, Fragment } from 'react';
import axios from "axios";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:5000/videos")
      .then(({ data }) => {
        console.log(data);
      });
  }

  render() {
    return (
     <h1> Videos Finder </h1>
    );
  }
}

export default App;
