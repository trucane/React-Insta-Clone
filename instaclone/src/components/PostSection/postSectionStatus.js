import React from 'react';
import './postSection.scss';

const PostSectionStatus = (props) =>{
    return(
        <div className="post-status-container">
            <div className="status-icons">
                <span><i class="far fa-heart"></i></span>
                <span className="stat-icon"><i class="far fa-comment"></i></span>
            </div>
            <div className="status-likes">
                <strong>{props.data.likes} likes</strong>
            </div>
        </div>
    )
}

export default PostSectionStatus;