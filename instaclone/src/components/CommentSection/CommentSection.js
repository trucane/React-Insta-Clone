import React from 'react';
import './commentSection.scss';
import moment from 'moment';





class CommentSection extends React.Component{
        state = {
                comments:this.props.comments,
                newComment:''
        }


        addNewComment = e =>{
                e.preventDefault();
      
                const newPost = {
                    username:'New User',
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
                <div>
                        {this.state.comments.map(comment =>(
                                <div key={comment.id}>
                                <span>{comment.username}</span>
                                <span>{comment.text}</span>
                                </div>
                        ))}

                        <form onSubmit={(e) => this.addNewComment(e)}>
                                <input  
                                type="text" 
                                name="newComment" 
                                value={this.state.newComment}  
                                placeholder="add comment" 
                                onChange={this.handleInput} />
                        </form>

                        <p>
                        { moment().startOf('year').fromNow() }
                        </p>


                </div>  
        )
}
    
    
}

export default CommentSection;