import React from 'react';
import moment from 'moment';


const CommentSection =(props) =>{
    return(
        
        <div>
            {props.comments.username}
            {props.comments.text}
            {props.comments.timestamp}
            {/* {moment().startOf(props.comments.timestamp).fromNow()} */}
         </div>

        
    )
}

export default CommentSection;