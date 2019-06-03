import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import PostSectionHeader from './postSectionHeader';
import PostSectionImage from './postSectionImage';
import PostSectionStatus from './postSectionStatus';
import AddComment from '../CommentSection/AddComment';
import './postSection.scss';



const PostSection = (props) =>{
    return(
        props.data.map(post =>(
            <div className="post-container" key={post.id}>
                <PostSectionHeader data={post}/>
                <PostSectionImage data={post} />
                <PostSectionStatus data={post} />

                {post.comments.map(comment =>(
                    <CommentSection key={comment.id} comments={comment} />
                ))}
                <AddComment />
            </div>
        ))
    )
}

export default PostSection;