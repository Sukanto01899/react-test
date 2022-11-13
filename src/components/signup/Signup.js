import React, { useState } from 'react';
import google from '../../utilities/google.png';
import './signup.css';

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const handleSignUp = ()=>{
        if(password === confirmPassword){
            console.log(true)
        }else{
            console.log(false)
        }
    };
    
    return (
        <form>
            <h1>Sign Up</h1>
            <label htmlFor="email">Email</label> <input onChange={(e)=> setEmail(e.target.value)} id="email" type="email" />
            <label htmlFor="password">Password </label> <input onChange={(e)=> setPassword(e.target.value)} id="password" type="password" />
            <label htmlFor="confirm-pass">Confirm Password </label> <input onChange={(e)=> setConfirmPassword(e.target.value)} id="confirm-pass" type="password" />
            <input onClick={handleSignUp} type="button" value="Sign Up"/>
            <p><small>Already have an account? <a href="/login">Login</a></small></p>
            <div className='or-space'><p>or</p></div>
            <div className='google-sign'> <img src={google} alt="" /> <a href="/google">Continue with Google</a></div>
        </form>
    );
};

export default Signup;