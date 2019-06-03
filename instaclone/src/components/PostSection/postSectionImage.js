import React from 'react';


const PostSectionImage = (props) =>{
    return(
        <img className="post-image" src={props.data.imageUrl} alt="post look"/>
    )
}

export default PostSectionImage;