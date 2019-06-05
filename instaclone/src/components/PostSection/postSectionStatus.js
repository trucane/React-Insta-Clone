import React from 'react';
import './postSection.scss';

const PostSectionStatus = (props) =>{
    return(
        <div className="post-status-container">
            <div className="status-icons">
                <span><i className="far fa-heart"></i></span>
                <span className="stat-icon"><i className="far fa-comment"></i></span>
            </div>
            <div className="status-likes">
                <strong>{props.data.likes} likes</strong>
            </div>
        </div>
    )
}

export default PostSectionStatus;