import React from 'react';
import PropTypes from 'prop-types';

import './PostContainer.css';

import CommentSection from './CommentSection';
import dummyData from '../dummy-data';



class PostContainer extends React.Component {
    constructor () {
        super();
        this.state = {
          dummyData: [],
          posts: []
        };
      }
      componentDidMount() {
        // after the initial render, CDM runs one time only
        // perform initial data fetches here - update state with the fetched data
        this.setState({ posts: dummyData });
      }

    increaseLikeHandler = index => {
        const newPost = [...this.state.posts]
        if (newPost[index].liked) {
            newPost[index].likes--
            newPost[index].liked = false;
        } 
        else {
            newPost[index].likes++
            newPost[index].liked = true;
        } this.setState({ posts: newPost })
    }

    render() {
        return (
            <div className="post-container">
                {this.state.posts.map((dummyData, index) => ( 
                    <div key={dummyData.username} className="user-header">
                        <div className="user-avi">
                            <img src={dummyData.thumbnailUrl} alt={dummyData.username} width="10%" height="10%" />
                        <p><strong>{dummyData.username}</strong></p>
                        </div>
                        <img src={dummyData.imageUrl} alt={dummyData.username} />
                        <div className="post-icons">
                            <button onClick={()=>this.increaseLikeHandler(index)}><img src="insta_like.png" alt="I like this" width="25px" height="25px"/></button>
                            <img src="speech-bubble.png" alt="Make a Comment" width="25px" height="25px" />
                        </div>
                        <p className="like-info"><strong>{dummyData.likes} likes</strong></p>
                        <CommentSection commentData={dummyData.comments} />
                        {dummyData.timestamp}
                    </div>
                ))}
            </div>
        );

};

}


PostContainer.propTypes = {
    dummyData: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
            timestamp: PropTypes.string.isRequired
        })
    )
}

PostContainer.defaultProps = {
    dummyData: []
};

export default PostContainer;