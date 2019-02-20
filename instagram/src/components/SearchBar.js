import React from 'react';

import './SearchBar.css';

function SearchBar (props) {  
    return (
        <div className= "search-bar">
            <div className="logo-header">
                <img src="instagram-logo.png" alt="Instagram Logo" width="35px" height="35px"/>
                <img src="insta_script.png" alt="Instagram Script" width="90px" height="35px"/>
            </div>
            <input
                type="text"
                placeholder="Search"
            />
            <div className="icons-header">
                <img src="insta_search.png" alt="Find Friends" width="35px" height="35px" />
                <img src="insta_like.png" alt="Likes" width="35px" height="35px" />
                <img src="insta_follower.jpg" alt="Followers" width="35px" height="35px" />
            </div>
        </div>
    )

}

export default SearchBar;