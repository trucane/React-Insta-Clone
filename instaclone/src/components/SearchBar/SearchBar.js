import React from 'react';
import './searchSection.scss'

const SearchBar = (props) =>{
    return(
        <div className="search-bar-container">
            <div className="search-logo">
                <p>logo</p>
            </div>
            <div className="search-bar">
                <input type="text" name="searchbar"  placeholder="insta search"/>
            </div>
            <div className="search-icons">
            <p>
                <span>icon one</span>
                <span>icon two</span>
                <span>icon three</span>
            </p>
            </div>
            {console.log('I am from search bar',props.data)}
        </div>
    )
}

export default SearchBar;