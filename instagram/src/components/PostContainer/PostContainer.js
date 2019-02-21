import React from 'react';
import PropTypes from 'prop-types';

// import './PostContainer.css';

import SearchBar from '../SearchBar';
import CommentSection from '../CommentSection';
import dummyData from '../../dummy-data';
import styled from 'styled-components';


const PostContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

const PostContainerUserHeaderDiv = styled.div `
    padding-bottom: 25px;
    display: flex;
    flex-direction: column;
    border: 1px solid lightgray;
`;

const PostContainerUserHeaderUserAvi= styled.div `
    display: flex;
    align-items: center;
    padding-bottom: 15px;
    padding-top: 10px;
    padding-left: 7px;
`;


const PostContainerUserHeaderUserImg= styled.img `
    border-radius: 50px;
    
`;

const PostContainerUserHeaderUserPTag = styled.p `
    padding-left: 10px;
    margin-top: 10px;

`;

const PostContainerUserHeaderUserIcons= styled.div`
    padding-top: 15px;
    border: none;
`;

const PostContainerUserHeaderUserButton = styled.button`
    border: none;
`;

const PostContainerUserHeaderUserPostIconsImg = styled.img `
    padding-right: 10px;
`;

const PostContainerLikeInfo = styled.p `
    margin: 7px 0;
    padding-left: 7px;
`;

const PostContainerTimeStamp = styled.p `
    padding-left: 7px;
`;

class PostContainer extends React.Component {
    constructor () {
        super();
        this.state = {
            dummyData: [],
            posts: [],
            filteredPosts: []
        };
      }
      componentDidMount() {
        // after the initial render, CDM runs one time only
        // perform initial data fetches here - update state with the fetched data
        this.setState({ posts: dummyData });
      }

      searchHandler = (e) => {
        const filtered = this.state.posts.filter((post) => {  
          return post.username.toLowerCase().includes(e.target.value.toLowerCase()) 
        })
        this.setState({ filteredPosts: filtered})
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
            <PostContainerDiv >
                <SearchBar searchHandler={this.searchHandler} />
                    {this.state.filteredPosts.length === 0 ?
                        this.state.posts.map((dummyData, index) => ( 
                            <PostContainerUserHeaderDiv key={dummyData.username} >
                                    <PostContainerUserHeaderUserAvi>
                                        <PostContainerUserHeaderUserImg img src={dummyData.thumbnailUrl} alt={dummyData.username} width="45px" height="45px" />
                                    <PostContainerUserHeaderUserPTag><strong>{dummyData.username}</strong></PostContainerUserHeaderUserPTag>
                                    </PostContainerUserHeaderUserAvi>
                                    <img src={dummyData.imageUrl} alt={dummyData.username} />
                                    <PostContainerUserHeaderUserIcons>
                                        <PostContainerUserHeaderUserButton onClick={()=>this.increaseLikeHandler(index)}><img src="insta_like.png" alt="I like this" width="25px" height="25px"/></PostContainerUserHeaderUserButton>
                                        <PostContainerUserHeaderUserPostIconsImg img src="speech-bubble.png" alt="Make a Comment" width="25px" height="25px" />
                                    </PostContainerUserHeaderUserIcons>
                                    <PostContainerLikeInfo><strong>{dummyData.likes} likes</strong></PostContainerLikeInfo>
                                <CommentSection commentData={dummyData.comments} />
                                 <PostContainerTimeStamp>{dummyData.timestamp}</PostContainerTimeStamp>
                            </PostContainerUserHeaderDiv>


        )):
            this.state.filteredPosts.map((dummyData, index) => ( 
                <PostContainerUserHeaderDiv key={dummyData.timestamp}>
                    <PostContainerUserHeaderUserAvi>
                        <PostContainerUserHeaderUserImg img src={dummyData.thumbnailUrl} alt={dummyData.username} width='30px' height='30px' className='imgThumb' />
                        <p className='userName'>{dummyData.username}</p>
                    </PostContainerUserHeaderUserAvi>
                        <img src={dummyData.imageUrl} alt={dummyData.username} />
                        <PostContainerUserHeaderUserIcons>
                                        <PostContainerUserHeaderUserButton onClick={()=>this.increaseLikeHandler(index)}><img src="insta_like.png" alt="I like this" width="25px" height="25px"/></PostContainerUserHeaderUserButton>
                                        <PostContainerUserHeaderUserPostIconsImg img src="speech-bubble.png" alt="Make a Comment" width="25px" height="25px" />
                                    </PostContainerUserHeaderUserIcons>
                                    <PostContainerLikeInfo><strong>{dummyData.likes} likes</strong></PostContainerLikeInfo>
                                <CommentSection commentData={dummyData.comments} />
                                <PostContainerTimeStamp>{dummyData.timestamp}</PostContainerTimeStamp>
                </ PostContainerUserHeaderDiv>
            ))    
            }
            </PostContainerDiv>
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