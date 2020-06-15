import React, { Component, Fragment } from 'react';

import { card } from './styles';

class SearchForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Fragment>

        <h1> Videos Finder </h1>

        <div >
          <div style={card}>
            <div>Search Term</div>
            <div>
              <input type="text" onChange={this.props.changeTerm}
                name="searchTerm" placeholder="search term" />
            </div>
          </div>

          <div style={card}>
            <div>Available time per day in minutes</div>
            <div>
              <input type="text"  onChange={this.props.changeWeek} 
                name="week" placeholder="10, 20, 30, 40, 50, 60, 70" />
            </div>
          </div>
        </div>

      </Fragment>
    );
  }

}

export default SearchForm;
