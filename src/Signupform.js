import React from 'react'
import './Signupform.css'
import { FaUser } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";

export default function Signupform() {
  return (
    <div class="loginform">
        <form action="">
        <h1>Login Form😀</h1>
        <div class="input-box">
            <FaUser className="icon1"/>
            <input type="text" placeholder='Username' required/>
        </div>
        <div class="input-box">
            <FaUserLock className="icon2"/>
            <input type="password" placeholder='Password' required/>
        </div>
        <div class="remember">
            <input type="checkbox"/>Remember Me.
            <a href="">Forgot Password?😕</a> 
        </div>
        <div class="login">
            <button>Login</button>
        </div>
        <div class="signup">
            <p>Don't Have an account?<a href="#">Sign Up</a></p>
        </div>
        </form>
    </div>
  )
}
