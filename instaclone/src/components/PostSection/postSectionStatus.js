import React from 'react';
import './postSection.scss';

class PostSectionStatus extends React.Component{

    state ={
        likes:this.props.data
    }


    likePost = () =>{
        const addLike = parseInt(this.state.likes) + 1;

        this.setState({
            likes: addLike
        })
    }

    render(){

        return(
            <div className="post-status-container">
                <div className="status-icons">
                    <span onClick={this.likePost} ><i className="far fa-heart"></i></span>
                    <span className="stat-icon"><i className="far fa-comment"></i></span>
                </div>
                <div className="status-likes">
                    <strong>{this.state.likes} likes</strong>
                </div>
            </div>
        )
    }
}

export default PostSectionStatus;