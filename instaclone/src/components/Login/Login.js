import React from 'react';



const Login = () =>{

    const login = () =>{
        localStorage.setItem('username', 'username');
        localStorage.setItem('isLoggedIn', true);
    }


    return (
        <form>
            <h1>Login Page</h1>
            <div>
                <input type="text" name="username"  placeholder="username" />
            </div>

            <div>
                <input type="password" name="password"  placeholder="password" />
            </div>

            <button onClick={login}>Login Button</button>
        </form>
    )
}


export default Login;