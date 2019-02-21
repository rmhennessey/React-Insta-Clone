import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";


// import './CommentSection.css';
import dummyData from '../dummy-data';

const CommentSectionDiv = styled.div `
    line-height: 10px;
    padding-left: 7px;
`;

class CommentSection extends Component {
    constructor (props) {
        super(props);
        this.state = {
            comments: this.props.commentData,
            newComment:''
        };
    }


    addNewComment = e => {
        e.preventDefault();

        const newComment = {
            username: "Rory",
            text: this.state.newComment
        };
        
        this.setState({ comments: [...this.state.comments, newComment], newComment:"" });

}

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    // componentDidMount() {
    //        this.setState({ commentData: [...this.state.commentData, newComment] });
    // }


    render() {
        return (
            <CommentSectionDiv>
            {this.state.comments.map(comment => (
                <div key={comment.text}>
                    <p><strong>{comment.username}</strong> {comment.text}</p>
                </div>
            ))}
            <form onSubmit={this.addNewComment}>
                <input
                    type="text"
                    placeholder="Add a comment..."
                    name= "newComment"
                    value={this.state.newComment}
                    onChange={this.changeHandler}
                />
            </form>
            </CommentSectionDiv>
        );
    }

}



// function CommentSection (props) {  
//     return (
//         <div className="comment-section">
//         {props.commentData.map(comment => (
//             <div key={comment.text}>
//                 <p><strong>{comment.username}</strong> {comment.text}</p>
//             </div>
//         ))}
//             <input
//                 type="text"
//                 placeholder="Add a comment..."
//             />
//         </div>
//     );

// };

CommentSection.propTypes = {
    commentData: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    )
}

CommentSection.defaultProps = {
    commentData: []
};

export default CommentSection;