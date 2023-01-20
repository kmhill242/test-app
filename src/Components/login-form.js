import React from 'react';
import LoginButton from './login-button';

export default class LoginForm extends React.Component {
    render() {
        return(
        <div className="card w-25" id="loginForm">
            <div className='card-header text-black text-center'>
                <h3>Log In Here!</h3>
                </div>
            <form>
        <label htmlFor="username">Username:</label>
        <input type="username" placeholder="Enter your username" id="username" name="username"/>
        <label htmlFor="password">Password:</label>
        <input type="password" placeholder="Enter your password" id="password" name="password"/>
        <LoginButton/>
            </form>
        </div>
        );
     }
    }