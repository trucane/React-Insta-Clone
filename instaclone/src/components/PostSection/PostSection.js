import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import PostSectionHeader from './postSectionHeader';
import PostSectionImage from './postSectionImage';
import PostSectionStatus from './postSectionStatus';
import AddComment from '../CommentSection/AddComment';
import './postSection.scss';
import ProtoTypes from 'prop-types';



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

PostSection.prototypes ={
    post: ProtoTypes.arrayOf(
        ProtoTypes.shape({
            id: ProtoTypes.number.isRequired,
            username: ProtoTypes.string.isRequired,
            thumbnailUrl: ProtoTypes.string.isRequired,
            likes: ProtoTypes.number,
            timestamp: ProtoTypes.string.isRequired,
            imageUrl: ProtoTypes.string.isRequired,
            comments:ProtoTypes.arrayOf(
                ProtoTypes.shape({
                    id: ProtoTypes.number.isRequired,
                    text: ProtoTypes.string.isRequired,
                    username: ProtoTypes.string.isRequired,
                })
            ).isRequired

        })
    )
};

export default PostSection;