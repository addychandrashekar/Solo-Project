import React, {useState} from 'react';
import { render } from 'react-dom';

// e.preventDefault();
// fetch('/api/signup', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({username: document.getElementById('username').value, password: document.getElementById('password').value, theMethod: 'submit'})
// })

const LoginPage = () => {
    return (
    <div>
        <div className = "login-whole-container">
        
        <form id = "login-form">
            <input type ="text" placeholder="Phone number, username, or email" id = "username"></input>
            <input type ="password" placeholder="Password" id = "password"></input>
            <div id = "user-acc-buttons">
                <button id = "login-button" type="submit" onClick = {(e) => {
                  e.preventDefault();
                  fetch('/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({username: document.getElementById('username').value, password: document.getElementById('password').value})
                    })
                }}>Log In</button>
            </div>
        </form>
    
        <div className = "login">
          Not registered?<a href='/api/signup'>Create an account</a>
        </div>

        <div className = "googleAuth">
          <a href='/api/auth/google'>
          <img src='https://user-images.githubusercontent.com/1531669/41761219-0e0e4d80-7629-11e8-9663-aabe62025d57.png' alt='google' width={"250px"} className="googleAuthLogo"></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;