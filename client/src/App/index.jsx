import React, { Component, Fragment } from 'react';
import axios from "axios";

import { main, card, features, button } from './styles';
import SearchForm from './SearchForm';

import Videos from './Videos';
import Words from './Words';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [{ title: "nothing" }],
      totalOfDays: 1,
      moreFrequentWords: [{ frequency: 0, word: "word" }]
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

        console.log(`total of days: ${this.state.totalOfDays}`);

      });

  }

  render() {

    return (
      <Fragment>

        <div style={main}>
          
         <SearchForm />

          <div style={card}>
            <input type="button" value="search" style={button}
              onClick={this.handleClick} />
          </div>

          <Videos videos={this.state.videos}/>

          <Words words={this.state.moreFrequentWords} />

          <div style={features}>
            total days to watch;
          </div>

        </div>

      </Fragment>
    );
  }

 
}

export default App;
