import React from 'react';

import {Button, Input, LoginForm} from '../../ComponentStyles/ComponentStyles';







class Login extends React.Component{

    state = {
        data:this.props.data,
        username:''
    }


    render(){

        const login = (e) =>{
            if(this.state.username.trim() === ''){
                e.preventDefault()
            }else{

                localStorage.setItem('username', this.state.username);
                localStorage.setItem('isLoggedIn', true);
            }
        }

        const handleUserName = (e) =>{
            console.log(e.target.value)
            return this.setState({
                [e.target.name]: e.target.value
            })
        }
    
    
        return (
            <LoginForm onSubmit={login} >
                <h1>Login Page</h1>
                <div>
                    <Input 
                    type="text" 
                    name="username"
                    onChange={handleUserName}  
                    placeholder="username" 
                    value={this.state.username} />
                </div>
    
                <div>
                    <Input type="password" name="password"  placeholder="password" />
                </div>
                <Button type="primary">Login Button</Button>
            </LoginForm>
        )
    }
}


export default Login;