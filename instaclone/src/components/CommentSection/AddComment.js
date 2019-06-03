import React from 'react';
import './commentSection.scss';


const AddComment =(props) =>{
    return(
        
        <div className="post-input-comment-container">
            <input className="post-input-comment" type="text" name="addcomment" placeholder="add a comment" />
         </div>

        
    )
}

export default AddComment;