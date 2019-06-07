import React from 'react';
import './searchSection.scss'

class SearchBar extends React.Component{



    render(){
        return(
            <div className="search-bar-container">
                <div className="search-logo">
                <img className="icon" src="https://clipart.info/images/ccovers/1516920571instagram-png-instagram-icon-1600x1600.png" alt="instagram logo" />
                
                    <p>
                        | <img className="iconimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="instagram logo" />
                    </p>
                </div>
                <div className="search-bar">
                    <input 
                    name="search"  
                    onChange={this.props.searchFilter}
                    placeholder="insta search" 
                    type="text" />
                </div>
                <div className="search-icons">
                <p>
                    <span>icon</span>
                    <span className="icon"><i className="far fa-heart"></i></span>
                    <span className="icon"><i className="far fa-user"></i></span>
                </p>
                </div>
            </div>
        )
    }
}

export default SearchBar;