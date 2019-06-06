import React from 'react';
import {PostStatusContainer} from '../../ComponentStyles/ComponentStyles';
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
            <PostStatusContainer>
                <div>
                    <span className="stat-icon" onClick={this.likePost} ><i className="fas fa-heart"></i></span>
                    <span className="stat-icons"><i className="fas fa-comment"></i></span>
                </div>
                <div className="status-likes">
                    <strong>{this.state.likes} likes</strong>
                </div>
            </PostStatusContainer>
        )
    }
}

export default PostSectionStatus;