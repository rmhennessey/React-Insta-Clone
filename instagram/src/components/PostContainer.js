import React from 'react';
import PropTypes from 'prop-types';

import './PostContainer.css';

import CommentSection from './CommentSection';



class PostContainer extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                likes: this.props.dummyData.map(el => el.likes),
                increaseLikes: false
            };
    }

    increaseLikeHandler = e => {
        if (this.state.increaseLikes === false) {
            this.setState(prevState => {
                return {
                    likes: prevState.likes + 1,
                    increaseLikes:true
                }
            })
        } else {
            this.setState(prevState => {
                return {
                    likes: prevState.likes -1,
                    increaseLikes: false
                }
            })
        }
    }

    render() {
        return (
            <div className="post-container">
                {this.props.dummyData.map(dummyData => ( 
                    <div key={dummyData.username} className="user-header">
                        <div className="user-avi">
                            <img src={dummyData.thumbnailUrl} alt={dummyData.username} width="10%" height="10%" />
                        <p><strong>{dummyData.username}</strong></p>
                        </div>
                        <img src={dummyData.imageUrl} alt={dummyData.username} />
                        <div className="post-icons">
                            <button onClick={this.increaseLikeHandler}><img src="insta_like.png" alt="I like this" width="25px" height="25px"/></button>
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