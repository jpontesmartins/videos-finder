import React, { Component, Fragment } from 'react';

import { features } from './styles';

class Words extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={features}>
        most 5 frequent words;<br></br>
        {this.props.words.map((word, w) => {
          return <div key={w}> {word.word} - {word.frequency} </div>
        })}
      </div>
    );
  }


}

export default Words;
