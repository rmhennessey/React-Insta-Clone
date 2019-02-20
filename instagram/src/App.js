import React, { Component } from 'react';
import dummyData from './dummy-data';

import './App.css';

import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';


class App extends Component {
  constructor () {
    super();
    this.state = {
      dummyData: []
    };

  }

  componentDidMount() {
    // after the initial render, CDM runs one time only
    // perform initial data fetches here - update state with the fetched data
    console.log('CDM running');
    this.setState({ dummyData: dummyData });
  }


  render() {
    return (
      <div className="App">
       <SearchBar />
       <PostContainer dummyData={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
