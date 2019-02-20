import React, { Component } from 'react';
import dummyData from './dummy-data';

import './App.css';

import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';


class App extends Component {
  

  render() {
    return (
      <div className="App">
       <SearchBar />
       <PostContainer />
      </div>
    );
  }
}

export default App;
