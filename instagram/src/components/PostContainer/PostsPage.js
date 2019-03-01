import React from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar';
import PostContainer from './PostContainer';

class PostsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
        }
    }

    render () {
        return (
        <div className="App">
            <PostContainer />
        </div>
        );
    }

}

export default PostsPage;