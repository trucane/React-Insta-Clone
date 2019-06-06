import React from 'react';
import {PostImage} from '../../ComponentStyles/ComponentStyles';


const PostSectionImage = (props) =>{
    return(
        <PostImage src={props.data.imageUrl} alt="post look"/>
    )
}

export default PostSectionImage;