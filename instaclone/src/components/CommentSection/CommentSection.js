import React from 'react';
import './commentSection.scss';
import moment from 'moment';


const CommentSection =(props) =>{
    return(
        
        <div className="post-comment">
            <strong>{props.comments.username}</strong>
            <span className="spacer">{props.comments.text} </span>
            {props.comments.timestamp}
            {/* {moment().startOf(props.comments.timestamp).fromNow()} */}
         </div>

        
    )
}

export default CommentSection;