import React from 'react';
import './postSection.scss';



const PostSectionHeader = (props) =>{
    return(
        <div className="post-header">
            <img src={props.data.thumbnailUrl} alt={props.data.username} className="post-user-url"/>
            <p className="post-username">{props.data.username}</p>
        </div>
    )
}


export default PostSectionHeader;