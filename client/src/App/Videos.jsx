import React, { Component, Fragment } from 'react';

import { features } from './styles';

class Videos extends Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
  }

  render() {

    return (
      <div style={features}>
        videos title;<br></br>
        {this.props.videos.map((video, v) => {
          return <div key={v}> {video.title} </div>
        })}
      </div>
    );
  }


}

export default Videos;
