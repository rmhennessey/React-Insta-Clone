import React, { Component } from 'react';
import dummyData from './dummy-data';
import styled from 'styled-components';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

// import './App.css';


const AppDiv= styled.div `
  margin: 0 auto;
  width: 800px;
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  

  render() {
    return (
      <AppDiv>
        <PostsPage />
      </ AppDiv>
    );
  }
}

export default Authenticate(App);
