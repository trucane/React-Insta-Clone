import React from 'react';
import './commentSection.scss';
import moment from 'moment';

import {CommentCont,Commenter,Comment,Commenttext, Input} from '../../ComponentStyles/ComponentStyles';




class CommentSection extends React.Component{
        state = {
                comments:this.props.comments,
                newComment:''
        }


        addNewComment = e =>{
                e.preventDefault();
                const newPost = {
                    username:localStorage.getItem('username'),
                    id:Date.now(),
                    text:this.state.newComment
                }

                if(this.state.newComment.trim === ''){

                }else{

                        this.setState({ comments: [...this.state.comments, newPost],
                                newComment:''
                        })
                }

        }

        handleInput = (event) =>{
                this.setState({ 
                        [event.target.name]:event.target.value 
                });

                console.log(this.state.newComment)
        };


   
render(){
        return(
                <CommentCont>
                        <Comment>
                        {this.state.comments.map(comment =>(
                                <div key={comment.id}>
                                <Commenter>{comment.username}</Commenter>
                                <Commenttext>{comment.text} {comment.id}</Commenttext>
                                </div>
                        ))}

                        </Comment>

                        <form onSubmit={(e) => this.addNewComment(e)}>
                                <Input  
                                type="ciInput" 
                                name="newComment" 
                                value={this.state.newComment}  
                                placeholder="add comment" 
                                onChange={this.handleInput} />
                        </form>

                        <p>
                        { moment().startOf('year').fromNow() }
                        </p>


                </CommentCont>  
        )
}
    
    
}

export default CommentSection;