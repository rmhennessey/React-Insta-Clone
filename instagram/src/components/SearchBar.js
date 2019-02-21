import React from 'react';
import PostContainer from "./PostContainer/PostContainer";
import styled from 'styled-components';

// import './SearchBar.css';

const SearchBarDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 20px;
    padding-top: 15px;
    border: 1px solid lightgray;
`;

const SearchBarLogoLeft = styled.div `
    display: flex;
    padding-left: 7px;
`;

const SearchBarImg = styled.img`
    padding-right: 10px;
    box-sizing: none;
`;

const SearchInput = styled.input`
    border-radius: 10px;
    width: 150px;
`;

function SearchBar (props) {  
    return (
        <SearchBarDiv>
            <SearchBarLogoLeft >
                <SearchBarImg src="instagram-logo.png" alt="Instagram Logo" width="35px" height="35px" />
                <SearchBarImg src="insta_script.png" alt="Instagram Script" width="85px" height="35px" />
            </SearchBarLogoLeft >
            <SearchInput
                type="text"
                placeholder="Search"
                onChange={props.searchHandler}
            />
            <div>
                <SearchBarImg src="insta_search.png" alt="Find Friends" width="35px" height="35px" />
                <SearchBarImg src="insta_like.png" alt="Likes" width="35px" height="25px" />
                <SearchBarImg src="insta_follower.jpg" alt="Followers" width="35px" height="25px" />
            </div>
        </SearchBarDiv>
    )

}

export default SearchBar;