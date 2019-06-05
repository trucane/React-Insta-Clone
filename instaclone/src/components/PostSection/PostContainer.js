import React from 'react';
import PostSection from './PostSection';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';



class PostContainer extends React.Component{

    render(){
        return(
            this.props.filteredPosts.length === 0 ? this.props.data.map( post => (
                <div key={post.id} className="post-container">
                    <PostSection data={post}/>
                    <CommentSection comments={post.comments} timestamp={post.timestamp}/>
                </div>
            )) : this.props.filteredPosts.map( post => (
                <div key={post.id} className="post-container">
                    <PostSection data={post}/>
                    <CommentSection comments={post.comments} timestamp={post.timestamp}/>
            </div> ))
    
        )
    }
}

PostContainer.prototypes ={
    post: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            username: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            likes: PropTypes.number,
            timestamp: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            comments:PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    text: PropTypes.string.isRequired,
                    username: PropTypes.string.isRequired,
                })
            ).isRequired

        })
    )
};



export default PostContainer