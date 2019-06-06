import React from 'react';



class Login extends React.Component{

    state = {
        data:this.props.data,
        username:''
    }


    render(){

        const login = () =>{
            localStorage.setItem('username', this.state.username);
            localStorage.setItem('isLoggedIn', true);
        }

        const handleUserName = (e) =>{
            console.log(e.target.value)
            return this.setState({
                [e.target.name]: e.target.value
            })
        }
    
    
        return (
            <form onSubmit={login}>
                <h1>Login Page</h1>
                <div>
                    <input 
                    type="text" 
                    name="username"
                    onChange={handleUserName}  
                    placeholder="username" 
                    value={this.state.username} />
                </div>
    
                <div>
                    <input type="password" name="password"  placeholder="password" />
                </div>
    
                <button>Login Button</button>
            </form>
        )
    }
}


export default Login;