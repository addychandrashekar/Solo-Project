import React, {useState} from 'react';
import { render } from 'react-dom';

const LoginPage = () => {
    return (
    <div>
        <div class = "login-whole-container">
        
        <form id = "login-form">
            <input type ="text" placeholder="Phone number, username, or email" id = "username"></input>
            <input type ="password" placeholder="Password" id = "password"></input>
            <div id = "user-acc-buttons">
                <button id = "login-button" type="submit">Log In</button>
                <button id = "sign-up-button" type="submit">Sign Up</button>
            </div>
        </form>
    
        <div class = "login">
    
          <a>Forgot password?</a>
        </div>
      </div>
    </div>
    )
}

export default LoginPage;