import React from 'react';


const PostPage = (props) =>{


    const logout = () =>{
        localStorage.removeItem( 'username')
        localStorage.removeItem('isLoggedIn')
    }

    return(
        <div>
            <form>
                <button onClick={logout}>log out</button>
            </form>
        </div>
    )
}


export default PostPage;