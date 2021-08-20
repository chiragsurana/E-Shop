import React, { useState } from 'react';
import { Link ,useHistory} from 'react-router-dom';
import './Login.css';
import { auth } from './firebase';
const Login = () => {
    const history=useHistory();
const [email ,setEmail]=useState('');
const [password,setPassword]=useState('');
    const login =(e)=>{
        e.preventDefault();//prevent refresh
auth.signInwithEmailAndPassword(email,password)
.then((auth)=>{
    //logged in 
    history.push("/");

})
.catch(e => alert(e.meassage));

    }
    const register =(e)=>{
        e.preventDefault();//prevent refresh
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth=>{

        })
        .catch((e)=>alert(e.meassage));
    }
    return (
        <div className="login">
        <Link to="/">
        <img className="login_logo"
        src="data:image/jpeg;base64,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"
        alt=""/>
        </Link>
        <div className="login_container">
        <h2>Sign in</h2>
        <form>
        <h5>E-mail</h5>
        <input value={email} onChange={e=>setEmail(e.target.value)} type="email"></input>
        <h5>password</h5>
        <input  value={password} onChange={e=>setPassword(e.target.value)} type="password"></input>
        <button onClick={login}  type="submit">Sign In</button>
        </form>
        <small>By entering you fullfil all the conditions
        </small>
        <button onClick={register}>Create your Account</button>
        </div>
        </div>
         
    )
}

export default Login;
