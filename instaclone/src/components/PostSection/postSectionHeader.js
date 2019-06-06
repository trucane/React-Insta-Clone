import React from 'react';
import './postSection.scss';
import {Header, Avatar, HeaderUsername} from '../../ComponentStyles/ComponentStyles';



const PostSectionHeader = (props) =>{
    return(
        < Header>
            <Avatar src={props.data.thumbnailUrl} alt={props.data.username}/>
            <HeaderUsername className="post-username">{props.data.username}</HeaderUsername>
        </Header>
    )
}


export default PostSectionHeader;