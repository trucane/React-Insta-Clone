import React from 'react';
import './postSection.scss';

const PostSectionStatus = (props) =>{
    return(
        <div className="post-status-container">
            <div className="status-icons">
                <span className="stat-icon">hrt</span>
                <span className="stat-icon">com</span>
            </div>
            <div className="status-likes">
                <strong>{props.data.likes} </strong>
            </div>
        </div>
    )
}

export default PostSectionStatus;